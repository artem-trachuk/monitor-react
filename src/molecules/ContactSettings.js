import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AddContact from "../organisms/AddContact";
import DeleteDataByIdDialog from "./DeleteDataByIdDialog";
import { contactsResource } from "../helpers/resourceNames";

const ContactSettings = props => {
  const update = props.update;
  const contact = props.contact;
  const deleteContact = props.deleteContact;
  return (
    <div className={"row"}>
      <div className="column right aligned">
        <Dropdown
          pointing={"top right"}
          item
          icon={{ name: "wrench", size: "big" }}
        >
          <Dropdown.Menu>
            {update && (
              <AddContact
                initialValues={contact}
                company={contact.company._id}
              />
            )}
            {deleteContact && (
              <DeleteDataByIdDialog
                resourceName={contactsResource}
                id={contact._id}
                header={<FormattedMessage id={"string.deleteContactHeader"} />}
                body={
                  <FormattedMessage
                    id={"string.deleteContactBody"}
                    values={{ contact: contact.name }}
                  />
                }
              />
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

ContactSettings.propTypes = {
  update: PropTypes.bool.isRequired,
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.bool.isRequired
};

export default ContactSettings;
