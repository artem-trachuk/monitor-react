import React, { Component } from "react";
import Now from "../now.png";
import Messenger from "../images/Messenger.png";
import Telegram from "../images/Telegram.png";
import {
  Divider,
  Dropdown,
  Flag,
  Grid,
  Icon,
  Image,
  List
} from "semantic-ui-react";
import { changeLanguage } from "../actions/userActions";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";
import LanguageDropdown from "../molecules/LanguageDropdown";
import DevelopedBy from "../molecules/DevelopedBy";

class BottomNavigation extends Component {
  constructor(props) {
    super(props);
    this.onLanguageChange = this.onLanguageChange.bind(this);
    this.state = {
      language: props.user.language
    };
  }
  onLanguageChange = language => {
    this.props.changeLanguage(language);
  };
  render() {
    const { intl } = this.props;
    return (
      <div className="ui container bottom-navigation">
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <LanguageDropdown />
            </Grid.Column>
            <Grid.Column width={8} />
            <Grid.Column textAlign="right">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={"https://m.me/100016534417211"}
              >
                <Image
                  id={"messenger-bottom"}
                  className={"footer-messenger-image"}
                  src={Messenger}
                  alt="Messenger"
                />
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={"https://t.me/artem_trachuk"}
              >
                <Image
                  id={"telegram-bottom"}
                  className={"footer-messenger-image"}
                  src={Telegram}
                  alt="Telegram"
                />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <DevelopedBy/>
      </div>
    );
    return (
      <div className="ui container" style={{ marginTop: "10vh" }}>
        <div className="ui grid">
          <div className="middle aligned stackable row">
            <div className="three wide column">
              <Dropdown
                floating
                text={intl.formatMessage({ id: "interface.language" })}
              >
                <Dropdown.Menu>
                  <Dropdown.Header>America</Dropdown.Header>
                  <Dropdown.Item onClick={() => this.onLanguageChange("en-US")}>
                    <Flag name="us" />
                    English (US)
                  </Dropdown.Item>
                  <Dropdown.Header>Europe</Dropdown.Header>
                  {/*<Dropdown.Item onClick={() => this.onLanguageChange("ee")}>*/}
                  {/*<Flag name="ee" />*/}
                  {/*Eesti*/}
                  {/*</Dropdown.Item>*/}
                  <Dropdown.Item onClick={() => this.onLanguageChange("en-GB")}>
                    <Flag name="gb" />
                    English (UK)
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => this.onLanguageChange("uk")}>
                    <Flag name="ua" />
                    Українська
                  </Dropdown.Item>
                  <Dropdown.Header>Asia</Dropdown.Header>
                  <Dropdown.Item onClick={() => this.onLanguageChange("ru")}>
                    <Flag name="ru" />
                    Русский
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="six wide column center aligned">
              <List bulleted horizontal link>
                {/*<List.Item as="a">*/}
                {/*<Icon name="bullhorn" /> Newsroom*/}
                {/*</List.Item>*/}
                {/*<List.Item as="a">*/}
                {/*<Icon name="bug" /> <FormattedMessage id="interface.reportbug" />*/}
                {/*</List.Item>*/}
                {/*<List.Item as="a">*/}
                {/*<Icon name="github" /> GitHub*/}
                {/*</List.Item>*/}
                {/*<List.Item as={Link} to={"/r/about_us"}>*/}
                {/*<Icon name="users" /> <FormattedMessage id="about_us.title" />*/}
                {/*</List.Item>*/}
                {/*<List.Item as="a">*/}
                {/*<Icon name="heart outline" /> Donate*/}
                {/*</List.Item>*/}
              </List>
            </div>
            <div className="two wide column center aligned">
              <a target="_blank" href={"http://m.me/100016534417211"}>
                <Image
                  className={"viewerLogo"}
                  src={Messenger}
                  alt="Messenger"
                />
              </a>
            </div>
            <div className="two wide column center aligned">
              <a target="_blank" href={"http://t.me/artem_trachuk"}>
                <Image className={"viewerLogo"} src={Telegram} alt="Telegram" />
              </a>
            </div>
            <div className="three wide column right aligned column">
              <img src={Now} alt="Ukraine Now" className="ukraine_now_logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.userReducer };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BottomNavigation)
);
