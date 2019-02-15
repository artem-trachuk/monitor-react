import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";

const NoDataTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui centered column grid">
        <div className="sixteen wide column center aligned">
          <Header icon>
            <Icon name="cloud" color={"blue"} />
            <FormattedMessage id="string.noData" />
          </Header>
        </div>
        {props.children && (
          <div className="row">
            <div className="column center aligned">{props.children}</div>
          </div>
        )}
      </div>
    </div>
  );
};

NoDataTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default NoDataTemplate;
