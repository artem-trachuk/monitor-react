import React from "react";
import PropTypes from "prop-types";
import { Icon, List } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HubDevices = props => {
  if (!props.devices || props.devices.length < 1) {
    return null;
  }
  function getListItem(item) {
    return (
      <List.Item as={Link} to={"/r/devices/view/" + item._id} key={item._id}>
        {item.name}
      </List.Item>
    );
  }
  const cameras = props.devices
    .filter(d => d.deviceType === "camera")
    .map(c => getListItem(c));
  const recorders = props.devices
    .filter(d => d.deviceType === "recorder")
    .map(r => getListItem(r));
  const netdevs = props.devices
    .filter(d => d.deviceType === "netdev")
    .map(n => getListItem(n));
  return (
    <>
      <div>
        <Icon name={"record"} />
        <List bulleted horizontal>
          {cameras}
        </List>
      </div>
      <div>
        <Icon name="microchip" />
        <List bulleted horizontal>
          {netdevs}
        </List>
      </div>
      <div>
        <Icon name="hdd" />
        <List bulleted horizontal>
          {recorders}
        </List>
      </div>
    </>
  );
};

HubDevices.propTypes = {
  devices: PropTypes.array.isRequired
};

export default HubDevices;
