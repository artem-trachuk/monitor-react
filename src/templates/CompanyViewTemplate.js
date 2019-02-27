import React from "react";
import PropTypes from "prop-types";
import { Divider, Icon, Image, List } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import Photos from "../organisms/Photos";
import CompanyView from "../organisms/CompanyView";
import CompanyHub from "../molecules/CompanyHub";
import CompanySettings from "../molecules/CompanySettings";
import Contact from "../molecules/Contact";
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
        <LogoPhotosHeaders logo={company.logo} photos={company.photos}/>
        <Divider />
        {company.update && (
          <CompanySettings company={company} deleteCompany={company.delete} />
        )}
        <CompanyView company={company} id={company._id} CRUD={CRUD} />
        <div className="four column row stackable">
          {company.hubs &&
            company.hubs.map(hub => <CompanyHub key={hub._id} hub={hub} />)}
        </div>
        {company.documents && <DocsOrganism documents={company.documents} />}
        {company.contacts && company.contacts.length > 0 && (
          <div className="sixteen wide column">
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
