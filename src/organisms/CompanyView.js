import React from "react";
import { Divider, Header, Icon, List } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import MapWrapper from "./MapWrapper";

const CompanyView = props => {
  return (
    <>
      <div className="ui row stackable">
        <div className="eight wide column">
          <Header as="h2">
            <Icon name="industry" />
            <Header.Content>
              <Header.Subheader>
                <FormattedMessage id="interface.name" />
              </Header.Subheader>
              {props.company.name}
            </Header.Content>
          </Header>
          {props.company.address && (
            <Header as="h2">
              <Icon name="map marker alternate" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="interface.address" />
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
                  <FormattedMessage id="interface.phone" />
                </Header.Subheader>
                {
                  <a href={"tel:" + props.company.phone}>
                    {props.company.phone}
                  </a>
                }
              </Header.Content>
            </Header>
          )}
          {props.company.email && (
            <Header as="h2">
              <Icon name="at" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="interface.email" />
                </Header.Subheader>
                {
                  <a href={"mailto:" + props.company.email}>
                    {props.company.email}
                  </a>
                }
              </Header.Content>
            </Header>
          )}
          {props.company.note && (
            <Header as="h2">
              <Icon name="sticky note" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="interface.note" />
                </Header.Subheader>
                {props.company.note}
              </Header.Content>
            </Header>
          )}
        </div>
        {props.company.LatLng ? (
          <div className="eight wide column">
            <MapWrapper
              marker={props.company.LatLng}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

CompanyView.propTypes = {};

export default CompanyView;
