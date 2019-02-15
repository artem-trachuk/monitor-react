import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { connect } from "react-redux";
import warehouseSolid from "../warehouseSolid.svg";

/**
 * Show Google Maps
 * Use MapWrapper only with redux-form Field component
 * For example: <Field name="LatLng" component={MapWrapper} />
 * Don't forget to change Google API key in googleMapURL property
 * Height property for containerElement is required, value is up to you
 */
// TODO change Google API key in googleMapURL property, current key is bounded to domain name
// TODO map localization
const MapWrapper = compose(
  withProps(props => {
    return {
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3XXK2YwPFB7amCLqkSg4II77EFu0G9R8&language=" +
        props.userR.language,
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />
    };
  }),
  withScriptjs,
  withGoogleMap
)(props => {
  const warehouse = {
    scaledSize: {
      height: 20,
      width: 32
    },
    url: warehouseSolid
  };
  if (props.input) {
    // add/edit component
    const {
      input: { value, onChange }
    } = props; // data from redux-form, value has format { lat: ..., lng: ... }
    return (
      // update marker position in redux-form state by firing onChange
      <GoogleMap mapTypeId={"satellite"}
        onClick={e => onChange({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
        defaultZoom={13}
        defaultCenter={value || props.defaultCenter}
      >
        {(props.marker || value) && <Marker position={props.marker || value} />}
        {props.markers &&
          props.markers.map(marker => <Marker position={marker} />)}
      </GoogleMap>
    );
  } else {
    // view component
    return (
      <GoogleMap mapTypeId={"satellite"}
        defaultZoom={13}
        defaultCenter={props.marker || props.defaultCenter}
      >
        <>{props.marker && <Marker position={props.marker} />}
        {props.markers &&
          props.markers.map(marker => (
            <Marker key={marker._id} position={marker.LatLng} icon={warehouse}>
              <InfoWindow><div>{marker.issue}</div></InfoWindow>
            </Marker>
          ))}</>
      </GoogleMap>
    );
  }
});

const mapToStateProps = state => {
  return { userR: state.userReducer };
};

export default connect(
  mapToStateProps,
  {}
)(MapWrapper);
