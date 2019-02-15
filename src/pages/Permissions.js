import React from "react";
import PermissionsTemplate from "../templates/PermissionsTemplate";

const Permissions = props => {
  return <PermissionsTemplate company={props.match.params.companyId} />;
};

export default Permissions;
