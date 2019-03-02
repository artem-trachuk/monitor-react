import React from "react";
import {Icon, Image, Label, Menu} from "semantic-ui-react";
import { Link } from "react-router-dom";
import LanguageDropdown from "../molecules/LanguageDropdown";
import Logo from "../images/logo-final.png";

const GuestTopBar = props => {
  return (
    <div
      className="ui container"
      style={{ marginBottom: "5vh", marginTop: "3vh" }}
    >
      <Menu secondary stackable>
        <Menu.Item as={Link} to="/">
          <Image size={"tiny"} centered src={Logo} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>{props.auth}</Menu.Item>
        </Menu.Menu>
        <Menu.Item>
          <LanguageDropdown />
        </Menu.Item>
      </Menu>
    </div>
  );
};

GuestTopBar.propTypes = {};

export default GuestTopBar;
