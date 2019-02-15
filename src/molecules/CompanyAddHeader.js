import React from 'react';
import {Header, Icon} from "semantic-ui-react";
import {FormattedMessage} from "react-intl";

const CompanyAddHeader = () => {
  return (
      <div className="sixteen wide column center aligned">
        <Header as="h1">
          <Icon name="industry" />{" "}
          <FormattedMessage id="interface.addCompany" />
        </Header>
      </div>
  );
};

export default CompanyAddHeader;