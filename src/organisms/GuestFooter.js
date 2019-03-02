import React from "react";
import PropTypes from "prop-types";
import { Grid, Image } from "semantic-ui-react";
import Messenger from "../images/Messenger.png";
import Telegram from "../images/Telegram.png";
import Now from "../now.png";
import DevelopedBy from "../molecules/DevelopedBy";

const GuestFooter = props => {
  return (
    <div className={"ui container"}>
      <Grid verticalAlign="middle" columns={2} divided stackable>
        <Grid.Row>
          <Grid.Column textAlign="right">
            <a rel="noopener noreferrer" target="_blank" href={"https://m.me/100016534417211"}>
              <Image
                id={"messenger-guest"}
                className={"footer-messenger-image"}
                src={Messenger}
                alt="Messenger"
              />
            </a>
            <a rel="noopener noreferrer" target="_blank" href={"https://t.me/artem_trachuk"}>
              <Image
                id={"telegram-guest"}
                className={"footer-messenger-image"}
                src={Telegram}
                alt="Telegram"
              />
            </a>
          </Grid.Column>
          <Grid.Column>
            <Image id={"ukraine-now-guest"} src={Now} alt="Ukraine Now" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <DevelopedBy/>
    </div>
  );
};

GuestFooter.propTypes = {};

export default GuestFooter;
