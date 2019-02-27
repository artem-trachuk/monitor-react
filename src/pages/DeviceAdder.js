import React from "react";
import Editor from "../HOCs/Editor";
import { deviceResource } from "../helpers/resourceNames";
import DeviceEditForm from "../organisms/DeviceEditForm";

const DeviceAdder = props => {
  const hub = props.match.params.hubId;
  const deviceType = props.match.params.deviceType;
  const lat = Number(props.match.params.lat) || undefined;
  const lng = Number(props.match.params.lng) || undefined;
  return (
    <Editor
      resource={deviceResource}
      initialValues={{
        hub: hub,
        deviceType: deviceType,
        LatLng: lat && lng ? {lat: lat, lng: lng} : undefined
      }}
    >
      <DeviceEditForm />
    </Editor>
  );
};

export default DeviceAdder;
