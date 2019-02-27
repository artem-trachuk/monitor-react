import React from "react";
import PropTypes from "prop-types";
import { Card, Divider, Grid, Header, Icon, Modal } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import QRCode from "qrcode.react";
import {Link} from "react-router-dom";

const Contact = props => {
  const { showCompany } = props;
  const contact = props.contact;
  const contactNote = contact.note ? "NOTE:" + contact.note + "\n" : "";
  const QRCodeValue =
    "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "ORG:" +
    contact.company.name +
    "\n" +
    "FN:" +
    contact.name +
    "\n" +
    "TEL;TYPE=WORK,VOICE:" +
    contact.phone +
    "\n" +
    contactNote +
    "END:VCARD";
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Grid verticalAlign="middle">
            <Grid.Column floated="left" width={12}>
              <Link to={"/r/contacts/" + contact._id}>{contact.name}</Link>
            </Grid.Column>
            <Grid.Column textAlign={"right"} floated="right" width={4}>
              <Modal size={"mini"} trigger={<Icon name="qrcode" size="big" />}>
                <Modal.Content style={{ textAlign: "center" }}>
                  <QRCode value={QRCodeValue} size={256} />
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>
        </Card.Header>
        <Divider />
        <Card.Description>
          {showCompany && (
            <Header as="h4">
              <Icon name="industry" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="interface.company" />
                </Header.Subheader>
                {contact.company.name}
              </Header.Content>
            </Header>
          )}
          <Header as="h4">
            <Icon name="phone" />
            <Header.Content>
              <Header.Subheader>
                <FormattedMessage id="interface.phone" />
              </Header.Subheader>
              {<a href={"tel:" + contact.phone}>{contact.phone}</a>}
            </Header.Content>
          </Header>
          {contact.note && (
            <Header as="h4">
              <Icon name="sticky note" />
              <Header.Content>
                <Header.Subheader>
                  <FormattedMessage id="interface.note" />
                </Header.Subheader>
                {contact.note}
              </Header.Content>
            </Header>
          )}
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
