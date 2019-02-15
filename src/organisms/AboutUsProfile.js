import React from "react";
import PropTypes from "prop-types";
import { Flag, Header, Icon, Image } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";

const AboutUsProfile = props => {
  return (
    <>
      <Image src={props.imageSrc} size="small" circular centered />
      <Header as={"h5"}>{props.position}</Header>
      <Header>
        {props.name}{" "}
        {props.linkedin && (
          <a href={props.linkedin}>
            <Icon name="linkedin" />
          </a>
        )}
        {props.telegram && (
          <a href={props.telegram}>
            <Icon name="telegram" />
          </a>
        )}
      </Header>
      <span>Location: </span>
      <Flag name={props.flag} />
      <span>{props.location}</span>
    </>
  );
};

AboutUsProfile.propTypes = {
  imageSrc: PropTypes.string,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  telegram: PropTypes.string,
  location: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired
};

export default AboutUsProfile;
