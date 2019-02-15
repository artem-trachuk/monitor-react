import React from "react";
import PropTypes from "prop-types";
import Contact from "../molecules/Contact";
import { Card } from "semantic-ui-react";

const ContactsTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="sixteen wide column">
          <Card.Group className={"stackable"} itemsPerRow={4}>
            {props.contacts.map(contact => {
              return <Contact showCompany={true} key={contact._id} contact={contact} />;
            })}
          </Card.Group>
        </div>
      </div>
    </div>
  );
};

ContactsTemplate.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactsTemplate;
