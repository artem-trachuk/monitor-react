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

const DeviceViewTemplate = props => {
  const device = props.device;
  const company = props.company;
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="three wide column middle aligned">
            <Link to={"/r/companies/view/" + company._id}>
              {company.logo ? (
                <Image src={serverURL + company.logo} />
              ) : (
                <Header as="h1">{company.name}</Header>
              )}
            </Link>
          </div>
          <Photos photos={device.photos} />
        </div>
        <Divider />
        {device.update && (
          <DeviceSettings update={device.update} device={device} />
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
      </div>
    </div>
  );
};

DeviceViewTemplate.propTypes = {
  device: PropTypes.object.isRequired,
  company: PropTypes.object.isRequired
};

export default DeviceViewTemplate;
