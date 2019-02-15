import React from "react";
import { getItemLoader } from "../HOCs/ItemLoader";
import { deviceResource } from "../helpers/resourceNames";
import Editor from "../HOCs/Editor";
import DeviceEditForm from "../organisms/DeviceEditForm";

function DeviceEditor(props) {
  const device = props.item;
  return (
    <Editor
      resource={deviceResource}
      initialValues={{ ...device, photos: undefined, documents: undefined }}
    >
      <DeviceEditForm deviceType={device.deviceType} />
    </Editor>
  );
}

export default getItemLoader(DeviceEditor, deviceResource);
