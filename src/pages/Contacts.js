import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingTemplate from "../templates/LoadingTemplate";
import ContactsTemplate from "../templates/ContactsTemplate";
import { setNavigatedLink } from "../actions/navigationActions";
import { fetchContacts } from "../actions/contactsActions";
import ErrorTemplate from "../templates/ErrorTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";

class Contacts extends Component {
  componentDidMount() {
    // set page name to help top navigation bar to highlight current button
    this.props.setNavigatedLink("contacts");
    this.props.fetchContacts();
  }
  componentWillUnmount() {
    // remove page name to remove highlight in the navigation bar
    this.props.setNavigatedLink("");
  }
  render() {
    const contacts = this.props.allContacts.contacts;
    const isFetching = this.props.allContacts.isFetching;
    const error = this.props.allContacts.error;
    return (
      <>
        {isFetching && contacts.length === 0 && <LoadingTemplate />}
        {error && <ErrorTemplate />}
        {!isFetching && contacts.length === 0 && <NoDataTemplate />}
        {contacts.length > 0 && (
          <>
            <ContactsTemplate contacts={contacts} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    allContacts: state.contactsReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchContacts()),
    setNavigatedLink: link => {
      dispatch(setNavigatedLink(link));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
