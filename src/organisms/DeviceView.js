import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import getDeviceIcon from "../helpers/getDeviceIcon";
import { CopyToClipboard } from "react-copy-to-clipboard";

const DeviceView = props => {
  let iconName = getDeviceIcon(props.device.deviceType);
  return (
    <div className="eight wide column">
      <Header as="h2">
        <Icon name={iconName} />
        <Header.Content>
          <Header.Subheader>
            <FormattedMessage id="interface.name" />
          </Header.Subheader>
          {props.device.name}
        </Header.Content>
      </Header>
      <Header as="h2">
        <Icon name="warehouse" />
        <Header.Content>
          <Header.Subheader>
            <FormattedMessage id="interface.hub" />
          </Header.Subheader>
          <Link to={"/r/hubs/view/" + props.device.hub._id}>
            {props.device.hub.name}
          </Link>
        </Header.Content>
      </Header>
      {props.device.deviceType === "camera" && (
        <Header as="h2">
          <Icon name="expand" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.ptz" />
            </Header.Subheader>
            {props.device.ptz ? "Yes" : "No"}
          </Header.Content>
        </Header>
      )}
      {props.device.ip && (
        <Header as="h2">
          <Icon name="terminal" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.ip" />
            </Header.Subheader>
            {props.device.ip}{" "}
            <CopyToClipboard text={props.device.ip}>
              <Icon color={"blue"} name="copy outline" />
            </CopyToClipboard>
          </Header.Content>
        </Header>
      )}
      {props.device.serial && (
        <Header as="h2">
          <Icon name="barcode" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.serial" />
            </Header.Subheader>
            {props.device.serial}
          </Header.Content>
        </Header>
      )}
      {props.device.note && (
        <Header as="h2">
          <Icon name="sticky note" />
          <Header.Content>
            <Header.Subheader>
              <FormattedMessage id="interface.note" />
            </Header.Subheader>
            {props.device.note}
          </Header.Content>
        </Header>
      )}
    </div>
  );
};

export default DeviceView;
