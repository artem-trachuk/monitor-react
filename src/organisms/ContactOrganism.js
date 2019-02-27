import React from "react";
import PropTypes from "prop-types";
import { Header, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const ContactOrganism = props => {
  const contact = props.contact;
  return (
    <div className="eight wide column">
      <Header as="h2">
        <Icon name="user" />
        <Header.Content>
          <Header.Subheader>
            <FormattedMessage id="interface.humanName" />
          </Header.Subheader>
          {contact.name}
        </Header.Content>
      </Header>
      <Header as="h2">
        <Icon name="phone" />
        <Header.Content>
          <Header.Subheader>
            <FormattedMessage id="interface.phone" />
          </Header.Subheader>
          {<a href={"tel:" + contact.phone}>{contact.phone}</a>}
        </Header.Content>
      </Header>
      {contact.company && (
        <Header as="h2">
          <Icon name="industry" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.company" />
            </Header.Subheader>
            <Link to={"/r/companies/view/" + contact.company._id}>
              {contact.company.name}
            </Link>
          </Header.Content>
        </Header>
      )}
      {contact.note && (
        <Header as="h2">
          <Icon name="sticky note" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.note" />
            </Header.Subheader>
            {contact.note}
          </Header.Content>
        </Header>
      )}
    </div>
  );
};

ContactOrganism.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactOrganism;
