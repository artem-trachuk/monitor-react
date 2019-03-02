import React from "react";
import PermissionsSearchUser from "../organisms/PermissionsSearchUser";
import PermissionOrganism from "../organisms/PermissionOrganism";
import {Header, Icon} from "semantic-ui-react";

const PermissionsTemplate = props => {
  const permissions = props.permissions;
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <Header as={"h2"}><Icon name={"industry"}/>{props.companyName}</Header>
          </div>
        </div>
        {permissions.map(permission => (
          <PermissionOrganism
            companyId={props.company}
            key={permission._id}
            permission={permission}
          />
        ))}
        <PermissionsSearchUser company={props.company} />
      </div>
    </div>
  );
};

export default PermissionsTemplate;
