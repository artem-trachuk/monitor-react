import React from "react";
import PropTypes from "prop-types";
import { Header, Image, Modal } from "semantic-ui-react";
import { Grid } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";

const GuestPhotosColumn = props => {
  return (
    <Grid.Column className={"guest-photos-column"} textAlign="center">
      <Modal
        trigger={
          <Image className={"guest-photo-image"} centered src={props.preview} />
        }
        basic
        size="large"
        closeIcon
      >
        <Modal.Content>
          <Image fluid src={props.src} />
        </Modal.Content>
      </Modal>
      <Header as={"h3"} style={{color: "#3ac0ff"}}>{props.text}</Header>
    </Grid.Column>
  );
};

GuestPhotosColumn.propTypes = {
  src: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default GuestPhotosColumn;
