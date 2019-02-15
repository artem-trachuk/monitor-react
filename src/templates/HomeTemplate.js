import React from "react";
import PropTypes from "prop-types";
import { Header, Comment } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import HomeIssue from "../organisms/HomeIssue";
import MapWrapper from "../organisms/MapWrapper";

const HomeTemplate = props => {
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="one column row center aligned">
          <div className="column">
            <Header size="medium">
              <FormattedMessage
                id="home.greeting"
                description="Greeting to welcome the user to the app"
                values={{
                  name: <b>{props.displayName}</b>
                }}
              />
            </Header>
          </div>
        </div>
        <div className={"stackable two column row"}>
          <div className="column">
            <Comment.Group>
              {props.issues.map(issue => (
                <HomeIssue key={issue._id} issue={issue} />
              ))}
            </Comment.Group>
          </div>
          <div className="column">
            <MapWrapper
              defaultCenter={props.defaultCenter}
              markers={props.issues
                .filter(i => i.hub.LatLng)
                .map(issue => {
                  return {
                    _id: issue._id,
                    issue: issue.message,
                    LatLng: issue.hub.LatLng
                  };
                })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HomeTemplate.propTypes = {
  displayName: PropTypes.string.isRequired,
  defaultCenter: PropTypes.object.isRequired,
  issues: PropTypes.array.isRequired
};

export default HomeTemplate;
