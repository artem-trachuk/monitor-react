import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const DeviceSettings = props => {
  const update = props.update;
  const device = props.device;
  return (
    <Dropdown
      pointing={"top right"}
      item
      icon={{ name: "wrench", size: "big" }}
    >
      <Dropdown.Menu>
        {update && (
          <Dropdown.Item as={Link} to={"/r/devices/edit/" + device._id}>
            <Icon name="edit" /> <FormattedMessage id="companyEditor.edit" />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

DeviceSettings.propTypes = {
  update: PropTypes.bool.isRequired,
  device: PropTypes.object.isRequired
};

export default DeviceSettings;
