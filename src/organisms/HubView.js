import React from "react";
import PropTypes from "prop-types";
import {Divider, Header, Icon, Popup} from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import CompanyPopup from "../molecules/CompanyPopup";
import HubDevices from "./HubDevices";

const HubView = props => {
  const hub = props.hub;
  return (
      <div className="eight wide column">
        <Header as="h2">
          <Icon name="warehouse" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="editor.name" />
            </Header.Subheader>
            {hub.name}
          </Header.Content>
        </Header>
        <Header as="h2">
          <Icon name="industry" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="editor.company" />
            </Header.Subheader>
            <Popup
              trigger={
                <Link to={"/r/companies/view/" + hub.company._id}>
                  {hub.company.name}
                </Link>
              }
              flowing
              hoverable
            >
              <CompanyPopup company={hub.company} />
            </Popup>
          </Header.Content>
        </Header>
        {hub.note && (
          <Header as="h2">
            <Icon name="sticky note" />
            <Header.Content>
              <Header.Subheader>
                <FormattedMessage id="editor.note" />
              </Header.Subheader>
              {hub.note}
            </Header.Content>
          </Header>
        )}
        <Divider />
        <HubDevices devices={hub.devices}/>
      </div>
  );
};

HubView.propTypes = {
  hub: PropTypes.object.isRequired
};

export default HubView;
