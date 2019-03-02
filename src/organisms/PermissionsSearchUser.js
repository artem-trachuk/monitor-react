import React, { Component } from "react";
import { Button, Checkbox, Header, Icon, Search } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";
import { getUser, postPermissions } from "../actions/permissionsActions";
import { connect } from "react-redux";

class PermissionsSearchUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: false
    };
  }

  handleResultSelect = (e, { result }) => this.setState({ user: result._id });

  handleCheckbox = (e, { label, checked }) => {
    this.setState({
      [label]: checked
    });
  };

  render() {
    const { intl } = this.props;
    const getUser = this.props.getUser;
    const postPermissions = this.props.postPermissions;
    const users = this.props.users.map(user => {
      return { title: user.name, image: user.picture, _id: user._id };
    });
    const company = this.props.company;
    return (
      <div className="row stackable viewer-block-margin">
        <div className="sixteen wide wide column">
          <Header as="h4">
            <FormattedMessage id={"interface.findUserById"} />
          </Header>
          <Search
            onSearchChange={(e, { value }) => getUser(value)}
            results={users}
            onResultSelect={this.handleResultSelect}
          />
        </div>
        <div className="sixteen wide wide column">
          <Checkbox
            label={intl.formatMessage({ id: "interface.crudCreate" })}
            onChange={this.handleCheckbox}
          />
          <Checkbox
            label={intl.formatMessage({ id: "interface.crudRead" })}
            onChange={this.handleCheckbox}
          />
          <Checkbox
            label={intl.formatMessage({ id: "interface.crudUpdate" })}
            onChange={this.handleCheckbox}
          />
          <Checkbox
            label={intl.formatMessage({ id: "interface.crudDelete" })}
            onChange={this.handleCheckbox}
          />
        </div>
        <div className="sixteen wide column">
          <Button
            disabled={!this.state.user}
            type="button"
            onClick={() =>
              postPermissions(company, this.state.user, {
                create: this.state["create"] || false,
                read: this.state["read"] || false,
                update: this.state["update"] || false,
                delete: this.state["delete"] || false
              })
            }
            icon
            labelPosition="right"
            positive
          >
            <FormattedMessage id="interface.add" /> <Icon name="save" />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.permissionsReducer.users
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: id => dispatch(getUser(id)),
    postPermissions: (company, user, CRUD) =>
      dispatch(postPermissions(company, user, CRUD))
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PermissionsSearchUser)
);
