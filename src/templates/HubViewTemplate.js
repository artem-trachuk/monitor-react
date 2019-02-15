import React from "react";
import PropTypes from "prop-types";
import { Button, Divider, Icon, Image } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import Photos from "../organisms/Photos";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import HubView from "../organisms/HubView";
import MapWrapper from "../organisms/MapWrapper";
import HubSettings from "../molecules/HubSettings";
import Issues from "../organisms/Issues";

const HubViewTemplate = props => {
  const hub = props.hub;
  const company = hub.company;
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="three wide column middle aligned">
            {company.logo && <Image src={serverURL + company.logo} />}
          </div>
          <Photos photos={hub.photos} />
        </div>
        <Divider />
        {hub.update && <HubSettings create={hub.create} update={hub.update} hub={hub}/>}
        <div className={"row stackable"}>
          <HubView hub={hub} />
          {hub.LatLng && (
            <div className="eight wide column">
              <MapWrapper defaultCenter={hub.LatLng} marker={hub.LatLng} />
            </div>
          )}
        </div>
        <Issues update={hub.update} hub={hub} />
      </div>
    </div>
  );
};

HubViewTemplate.propTypes = {
  hub: PropTypes.object.isRequired
};

export default HubViewTemplate;
