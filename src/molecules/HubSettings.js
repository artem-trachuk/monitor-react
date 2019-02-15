import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const HubSettings = props => {
  const hub = props.hub;
  const create = props.create;
  const update = props.update;
  return (
    <Dropdown
      pointing={"top right"}
      item
      icon={{ name: "wrench", size: "big" }}
    >
      <Dropdown.Menu>
        {create && (
          <>
            <Dropdown.Item
              as={Link}
              to={"/r/devices/add/camera/" + hub._id + "/" + hub.name}
            >
              <Icon name="record" />{" "}
              <FormattedMessage id="interface.addCamera" />
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={"/r/devices/add/netdev/" + hub._id + "/" + hub.name}
            >
              <Icon name="microchip" />{" "}
              <FormattedMessage id="interface.addNetDev" />
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={"/r/devices/add/recorder/" + hub._id + "/" + hub.name}
            >
              <Icon name="hdd" />{" "}
              <FormattedMessage id="interface.addRecorder" />
            </Dropdown.Item>
          </>
        )}
        {update && (
          <Dropdown.Item as={Link} to={"/r/hubs/edit/" + hub._id}>
            <Icon name="edit" /> <FormattedMessage id="companyEditor.edit" />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

HubSettings.propTypes = {
  hub: PropTypes.object.isRequired,
  create: PropTypes.bool.isRequired,
  update: PropTypes.bool.isRequired
};

export default HubSettings;
