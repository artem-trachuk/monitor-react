import React from "react";
import { Loader } from "semantic-ui-react";

const LoadingTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="column">
          <Loader active inline="centered" size="medium" />
        </div>
      </div>
    </div>
  );
};

export default LoadingTemplate;
