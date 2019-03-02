import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";
import Contact from "../molecules/Contact";

const CompanyContacts = props => {
  return (
    <Card.Group className={"stackable"} itemsPerRow={4}>
      {props.contacts.map(contact => {
        return (
          <Contact showCompany={false} key={contact._id} contact={contact} />
        );
      })}
    </Card.Group>
  );
};

CompanyContacts.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default CompanyContacts;
