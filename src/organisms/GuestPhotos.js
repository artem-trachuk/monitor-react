import React from "react";
import PropTypes from "prop-types";
import { Divider, Grid, Header, Image } from "semantic-ui-react";
import GuestPhotosColumn from "../molecules/GuestPhotosColumn";
import { FormattedMessage } from "react-intl";
import { serverURL } from "../helpers/serverURL";

const GuestPhotos = props => {
  return (
    <div className={"guest-photos"}>
      <Grid className={"guest-photos"} relaxed columns={3} centered stackable>
        <GuestPhotosColumn
          preview={serverURL + "guest/card1preview.png"}
          src={serverURL + "guest/card1.png"}
          text={<FormattedMessage id={"string.guestCard1"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card2preview.png"}
          src={serverURL + "guest/card2.png"}
          text={<FormattedMessage id={"string.guestCard2"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card3preview.png"}
          src={serverURL + "guest/card3.png"}
          text={<FormattedMessage id={"string.guestCard3"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card4preview.png"}
          src={serverURL + "guest/card4.png"}
          text={<FormattedMessage id={"string.guestCard4"} />}
        />
        <GuestPhotosColumn
            preview={serverURL + "guest/card5p.png"}
            src={serverURL + "guest/card5.png"}
          text={<FormattedMessage id={"string.guestCard5"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card6preview.png"}
          src={serverURL + "guest/card6.png"}
          text={<FormattedMessage id={"string.guestCard6"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card7preview.png"}
          src={serverURL + "guest/card7.png"}
          text={<FormattedMessage id={"string.guestCard7"} />}
        />
        <GuestPhotosColumn
          preview={serverURL + "guest/card8pr.png"}
          src={serverURL + "guest/card8.png"}
          text={<FormattedMessage id={"string.guestCard8"} />}
        />
        <GuestPhotosColumn
            preview={serverURL + "guest/card9p.png"}
            src={serverURL + "guest/card9.png"}
          text={<FormattedMessage id={"string.guestCard9"} />}
        />
      </Grid>
    </div>
  );
};

GuestPhotos.propTypes = {};

export default GuestPhotos;
