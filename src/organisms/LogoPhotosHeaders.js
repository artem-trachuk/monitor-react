import React from "react";
import PropTypes from "prop-types";
import { Image } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import Photos from "./Photos";

const LogoPhotosHeaders = props => {
  return (
    <div className="row">
      <div className="three wide column middle aligned">
        {props.logo && (
          <Image className={"viewerLogo"} src={serverURL + props.logo.path} />
        )}
      </div>
      <Photos photos={props.photos} />
    </div>
  );
};

LogoPhotosHeaders.propTypes = {
  logo: PropTypes.object.isRequired,
  photos: PropTypes.array.isRequired
};

export default LogoPhotosHeaders;
