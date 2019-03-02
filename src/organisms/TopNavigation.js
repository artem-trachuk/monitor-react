import React, { Component } from "react";
import { Icon, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { connect } from "react-redux";
import { setNavigatedLink } from "../actions/navigationActions";
import Logo from "../images/logo-final.png";

class TopNavigation extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div
        className="ui container"
        style={{ marginBottom: "5vh", marginTop: "3vh" }}
      >
        <Menu secondary stackable>
          <Menu.Item>
            <Image size={"tiny"} centered src={Logo} />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={this.props.navigationReducer.currentLink === "home"}
          >
            <Icon name="home" /> <FormattedMessage id="interface.home" />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/r/networks"
            name="networks"
            active={this.props.navigationReducer.currentLink === "networks"}
          >
            <Icon name="server" /> <FormattedMessage id="interface.networks" />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/r/iptable"
            name="iptable"
            active={this.props.navigationReducer.currentLink === "iptable"}
          >
            <Icon name="terminal" /> <FormattedMessage id="interface.iptable" />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/r/contacts"
            name="contacts"
            active={this.props.navigationReducer.currentLink === "contacts"}
          >
            <Icon name="address book" /> <FormattedMessage id="interface.contacts" />
          </Menu.Item>
          {/*<Menu.Item*/}
            {/*disabled*/}
            {/*as={Link}*/}
            {/*to="/r/documents"*/}
            {/*name="documents"*/}
            {/*active={this.props.navigationReducer.currentLink === "documents"}*/}
          {/*>*/}
            {/*<Icon name="file pdf" />{" "}*/}
            {/*<FormattedMessage id="companyEditor.documents" />*/}
          {/*</Menu.Item>*/}
          <Menu.Menu position="right">
            {this.props.displayName && (
              <>
                <Menu.Item as={Link} to="/r/user">
                  <Image src={this.props.photo} avatar />
                  {this.props.displayName}
                </Menu.Item>
                {/*<Menu.Item onClick={this.props.signOut}>*/}
                {/*<Icon name="sign-out" /> <FormattedMessage id="interface.signOut" />*/}
                {/*</Menu.Item>*/}
              </>
            )}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationReducer: state.navigationReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatedLink: link => {
      dispatch(setNavigatedLink(link));
    }
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TopNavigation)
);
