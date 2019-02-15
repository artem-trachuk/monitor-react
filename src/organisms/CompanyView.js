import React from "react";
import { Divider, Header, Icon, List } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import MapWrapper from "./MapWrapper";

const CompanyView = props => {
  //TODO change localhost, defaultCenter
  const documents =
    props.company && props.company.documents
      ? props.company.documents.map(doc => (
          <List.Item as="a" href={"/" + doc.path} key={doc.path}>
            <Icon name="file" /> {doc.originalname}
          </List.Item>
        ))
      : null;
  return (
    <>
      <div className="ui row stackable">
        <div className="eight wide column">
          <Header as="h2">
            <Icon name="industry" />
            <Header.Content>
              <Header.Subheader>
                <FormattedMessage id="editor.name" />
              </Header.Subheader>
              {props.company.name}
            </Header.Content>
          </Header>
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
          {props.company.note && (
            <Header as="h2">
              <Icon name="sticky note" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="editor.note" />
                </Header.Subheader>
                {props.company.note}
              </Header.Content>
            </Header>
          )}
        </div>
        {props.company.LatLng ? (
          <div className="eight wide column">
            <MapWrapper
              defaultCenter={{ lat: 46.5886146, lng: 30.7918339 }}
              marker={props.company.LatLng || null}
            />
          </div>
        ) : null}

        {documents && documents.length > 0 && (
          <div className="eight wide column">
            <Divider />
            <Header as="h2">
              <Icon name="file pdf" />
              <Header.Content>
                <FormattedMessage id="companyEditor.documents" />
              </Header.Content>
              {documents ? <List link>{documents}</List> : null}
            </Header>
          </div>
        )}
        {false && <div className="eight wide column">
          <Divider />
          <Header as="h2">
            <Icon name="address book" />
            <Header.Content>
              <FormattedMessage id="top.contacts" />
            </Header.Content>
          </Header>
        </div>}
      </div>
    </>
  );
};

CompanyView.propTypes = {};

export default CompanyView;
