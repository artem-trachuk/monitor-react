import React, { Component } from "react";
import Now from "../now.png";
import { Dropdown, Flag, Icon, List } from "semantic-ui-react";
import { changeLanguage } from "../actions/userActions";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import { Link } from "react-router-dom";

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
      <div className="ui container" style={{ marginTop: "10vh" }}>
        <div className="ui grid">
          <div className="three column middle aligned stackable row">
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
            <div className="ten wide column center aligned">
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
