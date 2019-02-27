import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import DeleteDataByIdDialog from "./DeleteDataByIdDialog";
import { hubResource } from "../helpers/resourceNames";

const HubSettings = props => {
  const hub = props.hub;
  const create = props.create;
  const update = props.update;
  const deleteHub = props.deleteHub;
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
              to={
                hub.LatLng
                  ? "/r/devices/add/camera/" +
                    hub._id +
                    "/" +
                    hub.name +
                    "/" +
                    hub.LatLng.lat +
                    "/" +
                    hub.LatLng.lng
                  : "/r/devices/add/camera/" + hub._id + "/" + hub.name
              }
            >
              <Icon name="record" />{" "}
              <FormattedMessage id="interface.addCamera" />
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={
                hub.LatLng
                  ? "/r/devices/add/netdev/" +
                    hub._id +
                    "/" +
                    hub.name +
                    "/" +
                    hub.LatLng.lat +
                    "/" +
                    hub.LatLng.lng
                  : "/r/devices/add/netdev/" + hub._id + "/" + hub.name
              }
            >
              <Icon name="microchip" />{" "}
              <FormattedMessage id="interface.addNetDev" />
            </Dropdown.Item>
            <Dropdown.Item
              as={Link}
              to={
                hub.LatLng
                  ? "/r/devices/add/recorder/" +
                    hub._id +
                    "/" +
                    hub.name +
                    "/" +
                    hub.LatLng.lat +
                    "/" +
                    hub.LatLng.lng
                  : "/r/devices/add/recorder/" + hub._id + "/" + hub.name
              }
            >
              <Icon name="hdd" />{" "}
              <FormattedMessage id="interface.addRecorder" />
            </Dropdown.Item>
          </>
        )}
        {update && (
          <>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to={"/r/hubs/edit/" + hub._id}>
              <Icon name="edit" /> <FormattedMessage id="interface.edit" />
            </Dropdown.Item>
            <Dropdown.Item disabled>
              <Icon name="archive" />{" "}
              <FormattedMessage id="interface.archive" />
            </Dropdown.Item>
            {deleteHub && (
              <DeleteDataByIdDialog
                resourceName={hubResource}
                id={hub._id}
                header={<FormattedMessage id={"string.deleteHubHeader"} />}
                body={
                  <FormattedMessage
                    id={"string.deleteHubBody"}
                    values={{ hub: hub.name }}
                  />
                }
              />
            )}
          </>
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
