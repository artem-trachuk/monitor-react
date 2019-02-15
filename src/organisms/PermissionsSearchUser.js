import React, { Component } from "react";
import { Button, Checkbox, Header, Icon, Search } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { getUser, postPermissions } from "../actions/permissionsActions";
import { connect } from "react-redux";

class PermissionsSearchUser extends Component {
  handleResultSelect = (e, { result }) => this.setState({ user: result._id });

  handleCheckbox = (e, { label, checked }) => {
    this.setState({
      [label]: checked
    });
  };

  render() {
    const getUser = this.props.getUser;
    const postPermissions = this.props.postPermissions;
    const users = this.props.users.map(user => {
      return { title: user.name, image: user.picture, _id: user._id };
    });
    const company = this.props.company;
    return (
      <div className="row stackable">
        <div className="eight wide column">
          <Header as="h4">Find user by Id.</Header>
          <Search
            onSearchChange={(e, { value }) => getUser(value)}
            results={users}
            onResultSelect={this.handleResultSelect}
          />
        </div>
        <div className="eight wide column">
          <Checkbox label="create" onChange={this.handleCheckbox} />
          <Checkbox label="read" onChange={this.handleCheckbox} />
          <Checkbox label="update" onChange={this.handleCheckbox} />
          <Checkbox label="delete" onChange={this.handleCheckbox} />
        </div>
        <div className="sixteen wide column center aligned">
          <Button
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
            <FormattedMessage id="editor.save" /> <Icon name="save" />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PermissionsSearchUser);
