import React from "react";
import { Icon, Label, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const GuestTopBar = props => {
  return (
    <div
      className="ui container"
      style={{ marginBottom: "5vh", marginTop: "3vh" }}
    >
      <Menu secondary stackable>
        <Menu.Item as={Link} to="/">
          <Icon name="record" className="green" /> <b>Monitor PS</b>
          <Label color="blue" floating>
            beta
          </Label>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>{props.auth}</Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

GuestTopBar.propTypes = {};

export default GuestTopBar;
