import React from "react";
import PropTypes from "prop-types";
import { Card, Icon, Label, List, Popup } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage, FormattedPlural } from "react-intl";

const CompanyHub = props => {
  const hub = props.hub;
  return (
    <div className="column" style={{ marginBottom: "4vh" }}>
      <Card raised>
        <Card.Content>
          {hub.issues.length > 0 ? (
            <Popup
              trigger={
                <Label color="red" ribbon="right">
                  <FormattedPlural
                    value={hub.issues.length}
                    one={<FormattedMessage id="interface.hasIssue" />}
                    other={
                      <FormattedMessage
                        id="interface.hasIssues"
                        values={{ count: hub.issues.length }}
                      />
                    }
                  />
                </Label>
              }
              content={hub.issues.map(issue => (
                <li key={issue._id}>{issue.message}</li>
              ))}
            />
          ) : (
            <Label ribbon="right">
              <FormattedMessage id="interface.noIssue" />
            </Label>
          )}
          <Card.Header>
            <Icon size={"large"} name="warehouse" />{" "}
            <Link to={"/r/hubs/view/" + hub._id}>{hub.name}</Link>
          </Card.Header>
          <Card.Description>
            <List bulleted horizontal link>
              {hub.devices && (
                <>
                  <List.Item>
                    <Icon name="record" />{" "}
                    {hub.devices
                      ? hub.devices.filter(d => d.deviceType === "camera")
                          .length
                      : 0}
                  </List.Item>
                  <List.Item>
                    <Icon name="microchip" />{" "}
                    {hub.devices.filter(d => d.deviceType === "netdev").length}
                  </List.Item>
                  <List.Item>
                    <Icon name="hdd" />{" "}
                    {
                      hub.devices.filter(d => d.deviceType === "recorder")
                        .length
                    }
                  </List.Item>
                </>
              )}
              {hub.equipment && (
                <List.Item>
                  <Icon name="box" /> {hub.equipment.length}
                </List.Item>
              )}
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

CompanyHub.propTypes = {
  hub: PropTypes.object.isRequired
};

export default CompanyHub;
