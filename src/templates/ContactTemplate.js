import React from "react";
import PropTypes from "prop-types";
import ContactOrganism from "../organisms/ContactOrganism";
import QrOrganism from "../organisms/QrOrganism";
import ContactSettings from "../molecules/ContactSettings";

const ContactTemplate = props => {
  const contact = props.contact;
  return (
    <div className="ui container">
      <div className="ui grid">
        {contact.update && (
          <ContactSettings
            deleteContact={contact.delete}
            contact={contact}
            update={contact.update}
          />
        )}
        <div className="sixteen wide row stackable">
          <ContactOrganism contact={contact} />
          <QrOrganism contact={contact} />
        </div>
      </div>
    </div>
  );
};

ContactTemplate.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactTemplate;
