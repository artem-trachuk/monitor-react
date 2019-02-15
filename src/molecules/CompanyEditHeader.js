import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

const CompanyEditHeader = () => {
  return (
    <div className="sixteen wide column center aligned">
      <Header as="h1">
        <Icon name="industry" />{" "}
        <FormattedMessage id="companyEditor.editCompany" />
      </Header>
    </div>
  );
};

export default CompanyEditHeader;
