import React from "react";
import PropTypes from "prop-types";
import { Icon, Popup } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

const IssueUnlock = props => {
  return (
    <Popup
      trigger={
        <Icon
          onClick={() => props.unlock(props._id)}
          name={"unlock"}
          className={"pointer_on_hover green_color_on_hover"}
        />
      }
      content={<FormattedMessage id={"interface.unlockIssue"} />}
      basic
    />
  );
};

IssueUnlock.propTypes = {};

export default IssueUnlock;
