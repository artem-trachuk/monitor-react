import React from "react";
import PropTypes from "prop-types";
import { Divider, Icon } from "semantic-ui-react";
import CompanyView from "../organisms/CompanyView";
import CompanyHub from "../molecules/CompanyHub";
import CompanySettings from "../molecules/CompanySettings";
import CompanyContacts from "../organisms/CompanyContacts";
import { Header } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import DocsOrganism from "../organisms/DocsOrganism";
import LogoPhotosHeaders from "../organisms/LogoPhotosHeaders";

const CompanyViewTemplate = props => {
  const company = props.company;
  const CRUD = company.CRUD;
  return (
    <div className="ui container">
      <div className="ui grid">
        <LogoPhotosHeaders logo={company.logo} photos={company.photos} />
        <Divider />
        {company.update && (
          <CompanySettings company={company} deleteCompany={company.delete} />
        )}
        <CompanyView company={company} id={company._id} CRUD={CRUD} />
        {company.hubs && company.hubs.length > 0 && (
          <>
            <div className="row viewer-block-margin">
              <div className="four column">
                <Header as="h2">
                  <Icon name="warehouse" />
                  <Header.Content>
                    <FormattedMessage id="interface.hubs" />
                  </Header.Content>
                </Header>
              </div>
            </div>
            <div className="four column row stackable">
              {company.hubs.map(hub => (
                <CompanyHub key={hub._id} hub={hub} />
              ))}
            </div>
          </>
        )}
        {company.documents && company.documents.length > 0 && (
          <DocsOrganism documents={company.documents} />
        )}
        {company.contacts && company.contacts.length > 0 && (
          <div className="sixteen wide column viewer-block-margin">
            <Header as="h2">
              <Icon name="address book" />
              <Header.Content>
                <FormattedMessage id="interface.contacts" />
              </Header.Content>
            </Header>
            <CompanyContacts contacts={company.contacts} />
          </div>
        )}
      </div>
    </div>
  );
};

CompanyViewTemplate.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyViewTemplate;
