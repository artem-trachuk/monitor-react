import React from "react";
import { Header, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

const ErrorTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui centered three column grid">
        <div className="column center aligned">
          <Header icon>
            <Icon name="cloud" color={"red"} />
            <FormattedMessage id="string.error" />
            {props.error}
          </Header>
        </div>
      </div>
    </div>
  );
};

export default ErrorTemplate;
