import React, { Component } from "react";
import PermissionsTemplate from "../templates/PermissionsTemplate";
import { getPermissions } from "../actions/permissionsActions";
import { connect } from "react-redux";
import LoadingTemplate from "../templates/LoadingTemplate";

class Permissions extends Component {
  componentDidMount() {
    this.props.getPermissions(this.props.match.params.companyId);
  }
  render() {
    const permissions = this.props.permissions;
    return (
      <>
        {!permissions && <LoadingTemplate />}
        {permissions && permissions.length > 0 && (
          <PermissionsTemplate
            permissions={permissions}
            company={this.props.match.params.companyId}
            companyName={this.props.match.params.companyName}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    permissions: state.permissionsReducer.permissions || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPermissions: companyId => dispatch(getPermissions(companyId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Permissions);
