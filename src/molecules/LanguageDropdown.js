import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Flag } from "semantic-ui-react";
import { changeLanguage } from "../actions/userActions";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";

const LanguageDropdown = props => {
  const { intl } = props;
  const onLanguageChange = language => {
    props.changeLanguage(language);
  };
  return (
    <Dropdown floating text={intl.formatMessage({ id: "interface.language" })}>
      <Dropdown.Menu>
        <Dropdown.Header>America</Dropdown.Header>
        <Dropdown.Item onClick={() => onLanguageChange("en-US")}>
          <Flag name="us" />
          English (US)
        </Dropdown.Item>
        <Dropdown.Header>Europe</Dropdown.Header>
        <Dropdown.Item disabled onClick={() => onLanguageChange("ee")}>
          <Flag name="ee" />
          Eesti
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onLanguageChange("en-GB")}>
          <Flag name="gb" />
          English (UK)
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onLanguageChange("uk")}>
          <Flag name="ua" />
          Українська
        </Dropdown.Item>
        <Dropdown.Header>Asia</Dropdown.Header>
        <Dropdown.Item onClick={() => onLanguageChange("ru")}>
          <Flag name="ru" />
          Русский
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => {
      dispatch(changeLanguage(language));
    }
  };
};

LanguageDropdown.propTypes = {};

export default injectIntl(
  connect(
    null,
    mapDispatchToProps
  )(LanguageDropdown)
);
