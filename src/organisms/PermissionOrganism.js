import React from "react";
import PropTypes from "prop-types";
import { Checkbox, Image } from "semantic-ui-react";
import { postPermissions } from "../actions/permissionsActions";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

const PermissionOrganism = props => {
  const intl = props.intl;
  const permission = props.permission;
  const user = permission.user;
  const postPermission = (p, value) => {
    permission[p] = value;
    props.postPermissions(props.companyId, user, permission);
  };
  console.log(permission);
  // if (!permission) return;
  return (
    <div className={"middle aligned row"}>
      <div className="column">
        <Image size="tiny" src={user.picture} />
      </div>
      <div className="three wide column">{user.name}</div>
      <div className="ten wide column">
        <Checkbox
          onChange={() => postPermission("create", !permission.create)}
          label={intl.formatMessage({ id: "interface.crudCreate" })}
          checked={permission.create}
        />{" "}
        <Checkbox
          onChange={() => postPermission("read", !permission.read)}
          label={intl.formatMessage({ id: "interface.crudRead" })}
          checked={permission.read}
        />
        <Checkbox
          onChange={() => postPermission("update", !permission.update)}
          label={intl.formatMessage({ id: "interface.crudUpdate" })}
          checked={permission.update}
        />
        <Checkbox
          onChange={() => postPermission("delete", !permission.delete)}
          label={intl.formatMessage({ id: "interface.crudDelete" })}
          checked={permission.delete}
        />
      </div>
    </div>
  );
};

PermissionOrganism.propTypes = {
  permission: PropTypes.object.isRequired,
  companyId: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    postPermissions: (company, user, CRUD) =>
      dispatch(postPermissions(company, user, CRUD))
  };
};

export default injectIntl(
  connect(
    null,
    mapDispatchToProps
  )(PermissionOrganism)
);
