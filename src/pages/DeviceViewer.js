import React from "react";
import { getItemLoader } from "../HOCs/ItemLoader";
import { deviceResource } from "../helpers/resourceNames";
import DeviceViewTemplate from "../templates/DeviceViewTemplate";

const DeviceViewer = props => {
  const device = props.item;
  const company = device.hub.company;
  return (
    <DeviceViewTemplate
      device={device}
      company={company}
    />
  );
};

export default getItemLoader(DeviceViewer, deviceResource);
