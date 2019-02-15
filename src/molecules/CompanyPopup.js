import React from "react";
import { Header } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

const CompanyPopup = props => {
  return (
    <>
      {props.company.address && (
        <Header as="h2">
          <Icon name="map marker alternate" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="companyEditor.address" />
            </Header.Subheader>
            {props.company.address}
          </Header.Content>
        </Header>
      )}
      {props.company.phone && (
        <Header as="h2">
          <Icon name="phone" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="companyEditor.phone" />
            </Header.Subheader>
            {<a href={"tel:" + props.company.phone}>{props.company.phone}</a>}
          </Header.Content>
        </Header>
      )}
      {props.company.email && (
        <Header as="h2">
          <Icon name="at" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="companyEditor.email" />
            </Header.Subheader>
            {
              <a href={"mailto:" + props.company.email}>
                {props.company.email}
              </a>
            }
          </Header.Content>
        </Header>
      )}
    </>
  );
};

CompanyPopup.propTypes = {};

export default CompanyPopup;
