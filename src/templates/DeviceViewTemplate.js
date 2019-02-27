import React from "react";
import PropTypes from "prop-types";
import { Button, Divider, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Photos from "../organisms/Photos";
import { FormattedMessage } from "react-intl";
import DeviceView from "../organisms/DeviceView";
import MapWrapper from "../organisms/MapWrapper";
import { serverURL } from "../helpers/serverURL";
import DeviceSettings from "../molecules/DeviceSettings";
import DocsOrganism from "../organisms/DocsOrganism";
import LogoPhotosHeaders from "../organisms/LogoPhotosHeaders";

const DeviceViewTemplate = props => {
  const device = props.device;
  const company = props.company;
  return (
    <div className="ui container">
      <div className="ui grid">
        <LogoPhotosHeaders logo={company.logo} photos={device.photos}/>
        <Divider />
        {device.update && (
          <DeviceSettings update={device.update} device={device} deleteDevice={device.delete} />
        )}
        <div className="row stackable">
          <DeviceView device={device} />
          {device.LatLng && (
            <div className="eight wide column">
              <MapWrapper
                defaultCenter={device.LatLng}
                marker={device.LatLng || null}
              />
            </div>
          )}
        </div>
        {device.documents && device.documents.length > 0 && <DocsOrganism documents={device.documents}/>}
      </div>
    </div>
  );
};

DeviceViewTemplate.propTypes = {
  device: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired
};

export default DeviceViewTemplate;
