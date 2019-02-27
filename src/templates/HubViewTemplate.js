import React from "react";
import PropTypes from "prop-types";
import { Divider, Image } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import Photos from "../organisms/Photos";
import HubView from "../organisms/HubView";
import MapWrapper from "../organisms/MapWrapper";
import HubSettings from "../molecules/HubSettings";
import Issues from "../organisms/Issues";
import DocsOrganism from "../organisms/DocsOrganism";
import LogoPhotosHeaders from "../organisms/LogoPhotosHeaders";

const HubViewTemplate = props => {
  const hub = props.hub;
  const company = hub.company;
  return (
    <div className="ui container">
      <div className="ui grid">
        <LogoPhotosHeaders logo={company.logo} photos={hub.photos}/>
        <Divider />
        {hub.update && (
          <HubSettings create={hub.create} update={hub.update} hub={hub} deleteHub={hub.delete} />
        )}
        <div className={"row stackable"}>
          <HubView hub={hub} />
          {hub.LatLng && (
            <div className="eight wide column">
              <MapWrapper defaultCenter={hub.LatLng} marker={hub.LatLng} />
            </div>
          )}
        </div>
        {hub.documents && <DocsOrganism documents={hub.documents}/>}
        <Issues update={hub.update} hub={hub} />
      </div>
    </div>
  );
};

HubViewTemplate.propTypes = {
  hub: PropTypes.object.isRequired
};

export default HubViewTemplate;
