import React from 'react';
import PermissionsSearchUser from "../organisms/PermissionsSearchUser";

const PermissionsTemplate = props => {
  return (
      <div className="ui container">
        <div className="ui grid">
          <PermissionsSearchUser company={props.company}/>
        </div>
      </div>
  );
};

export default PermissionsTemplate;