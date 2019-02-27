import React from 'react';
import PropTypes from 'prop-types';
import ContactOrganism from "../organisms/ContactOrganism";
import QrOrganism from "../organisms/QrOrganism";

const ContactTemplate = props => {
  return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide row stackable">
            <ContactOrganism contact={props.contact}/>
            <QrOrganism contact={props.contact}/>
          </div>
        </div>
      </div>
  );
};

ContactTemplate.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactTemplate;