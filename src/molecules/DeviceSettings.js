import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import DeleteDataByIdDialog from "./DeleteDataByIdDialog";
import { deviceResource } from "../helpers/resourceNames";

const DeviceSettings = props => {
  const update = props.update;
  const device = props.device;
  const deleteDevice = props.deleteDevice;
  return (
    <Dropdown
      pointing={"top right"}
      item
      icon={{ name: "wrench", size: "big" }}
    >
      <Dropdown.Menu>
        {update && (
          <>
            <Dropdown.Item as={Link} to={"/r/devices/edit/" + device._id}>
              <Icon name="edit" /> <FormattedMessage id="interface.edit" />
            </Dropdown.Item>
            <Dropdown.Item disabled>
              <Icon name="archive" />{" "}
              <FormattedMessage id="interface.archive" />
            </Dropdown.Item>
            {deleteDevice && (
              <DeleteDataByIdDialog
                header={<FormattedMessage id={"string.deleteDeviceHeader"} />}
                body={
                  <FormattedMessage
                    id={"string.deleteDeviceBody"}
                    values={{ device: device.name }}
                  />
                }
                id={device._id}
                resourceName={deviceResource}
              />
            )}
          </>
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
