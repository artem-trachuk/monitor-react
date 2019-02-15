import React from "react";
import PropTypes from "prop-types";
import {Divider, Icon, Image, List} from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import Photos from "../organisms/Photos";
import CompanyView from "../organisms/CompanyView";
import CompanyHub from "../molecules/CompanyHub";
import CompanySettings from "../molecules/CompanySettings";
import Contact from "../molecules/Contact";
import CompanyContacts from "../organisms/CompanyContacts";
import {Header} from "semantic-ui-react";
import {FormattedMessage} from "react-intl";

const CompanyViewTemplate = props => {
  const company = props.company;
  const CRUD = company.CRUD;
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="three wide column middle aligned">
            {company.logo && (
              <Image size="medium" src={serverURL + company.logo} />
            )}
          </div>
          <Photos photos={company.photos} />
        </div>
        <Divider />
        {company.update && <CompanySettings company={company} />}
        <CompanyView company={company} id={company._id} CRUD={CRUD} />
        <Divider />
        <div className="four column row stackable">
          {company.hubs &&
          company.hubs.map(hub => <CompanyHub key={hub._id} hub={hub} />)}
        </div>
        {company.contacts && company.contacts.length > 0 && (
          <div className="sixteen wide column">
            <Divider />
            <Header as="h2">
              <Icon name="address book" />
              <Header.Content>
                <FormattedMessage id="top.contacts" />
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
