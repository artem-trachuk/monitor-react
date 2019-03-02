import React, { Component } from "react";
import "./App.css";
// react-router
import { BrowserRouter as Router } from "react-router-dom";
// redux
import { connect } from "react-redux";
// components
import Routes from "./pages/Routes";
import {
  getDefaultCenterFromUserAgent,
  login,
  logout,
  updateUser
} from "./actions/userActions";
import { Dimmer, Loader } from "semantic-ui-react";
import TopNavigation from "./organisms/TopNavigation";
// react-intl
import { FormattedMessage, IntlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import uk from "react-intl/locale-data/uk";
import ru from "react-intl/locale-data/ru";
import messages_uk from "./locales/uk";
import messages_en from "./locales/en";
import messages_ru from "./locales/ru";
// Import FirebaseAuth and firebase.
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";
import "firebase/auth";
import ErrorTemplate from "./templates/ErrorTemplate";
import BottomNavigation from "./organisms/BottomNavigation";
import UnprotectedRoutes from "./helpers/UnprotectedRoutes";
import GuestTopBar from "./organisms/GuestTopBar";
import GuestFooter from "./organisms/GuestFooter";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyAFo_lb3m4A7-PmXuahyeVD3xhGdCZGJi8",
  authDomain: "monitor-ps.firebaseapp.com",
  databaseURL: "https://monitor-ps.firebaseio.com",
  projectId: "monitor-ps",
  storageBucket: "monitor-ps.appspot.com",
  messagingSenderId: "497412012279"
};

firebase.initializeApp(config);

addLocaleData([...en, ...uk, ...ru]);

const messages = {
  uk: messages_uk,
  "en-US": messages_en,
  "en-GB": messages_en,
  ru: messages_ru
};

// TODO bookmarks, tags

class App extends Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.,
    hasError: false
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.props.updateUser(user);
      if (user) {
        this.props.login();
        this.props.getDefaultCenterFromUserAgent();
      }
    });
  }

  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const user = this.props.userR.user;
    let view = <></>;
    if (this.state.hasError || this.props.userR.error) {
      view = (
        <ErrorTemplate error={this.state.hasError || this.props.userR.error} />
      );
    } else if (user === undefined) {
      view = (
        <div className="ui container">
          <Dimmer active inverted>
            <Loader size="large">
              <FormattedMessage id={"interface.loading"} />
            </Loader>
          </Dimmer>
        </div>
      );
    } else if (user === null) {
      view = (
        <>
          <GuestTopBar
            auth={
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            }
          />
          {/*<Guest*/}
          {/*auth={*/}
          {/*<StyledFirebaseAuth*/}
          {/*uiConfig={this.uiConfig}*/}
          {/*firebaseAuth={firebase.auth()}*/}
          {/*/>*/}
          {/*}*/}
          {/*/>*/}
          <div style={{ flexGrow: 1 }}>
            <UnprotectedRoutes />
          </div>
          {/*<BottomNavigation />*/}
          <GuestFooter />
        </>
      );
    } else if (user && this.props.userR.isLoggedIn) {
      view = (
        <>
          <TopNavigation
            displayName={this.props.userR.user.displayName}
            photo={this.props.userR.user.photoURL}
            signOut={this.props.logout}
          />
          <div style={{ flexGrow: 1 }}>
            <Routes />
          </div>
          <BottomNavigation />
        </>
      );
    }
    return (
      <IntlProvider
        textComponent={React.Fragment}
        locale={this.props.userR.language}
        messages={messages[this.props.userR.language]}
      >
        <Router>
          <>{view}</>
        </Router>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    userR: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: name => {
      dispatch(updateUser(name));
    },
    login: () => {
      dispatch(login());
    },
    logout: () => {
      dispatch(logout());
    },
    getDefaultCenterFromUserAgent: () => {
      dispatch(getDefaultCenterFromUserAgent());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
