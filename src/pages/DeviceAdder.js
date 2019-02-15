import React from "react";
import Editor from "../HOCs/Editor";
import { deviceResource } from "../helpers/resourceNames";
import DeviceEditForm from "../organisms/DeviceEditForm";

const DeviceAdder = props => {
  const hub = props.match.params.hubId;
  const deviceType = props.match.params.deviceType;
  return (
    <Editor
      resource={deviceResource}
      initialValues={{ hub: hub, deviceType: deviceType }}
    >
      <DeviceEditForm />
    </Editor>
  );
};

export default DeviceAdder;
