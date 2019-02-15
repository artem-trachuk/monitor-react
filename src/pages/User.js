import React, { Component } from "react";
import { getUserId, logout } from "../actions/userActions";
import { connect } from "react-redux";
import { Button, Header, Icon, Image } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class User extends Component {
  componentDidMount() {
    this.props.getUserId();
  }
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="one column row user">
            <div className="column">
              <Image
                src={this.props.userReducer.user.photoURL}
                centered
                size="tiny"
              />
            </div>
            <div className="column center aligned">
              <Header as="h2">{this.props.userReducer.user.displayName}</Header>
            </div>
            <div className="column center aligned">
              Id: {this.props.userReducer.userId}
            </div>
            <div className="column right aligned">
              <Button
                color="green"
                type="button"
                onClick={() => this.props.logout()}
                icon
                labelPosition="right"
              >
                <FormattedMessage id="interface.signOut" />
                <Icon name="sign-out" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userReducer: state.userReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    getUserId: () => dispatch(getUserId())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
