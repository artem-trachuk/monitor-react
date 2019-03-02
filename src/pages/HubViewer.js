import React from "react";
import PropTypes from "prop-types";
import { getItemLoader } from "../HOCs/ItemLoader";
import { hubResource } from "../helpers/resourceNames";
import HubViewTemplate from "../templates/HubViewTemplate";

const HubViewer = props => {
  const hub = props.item;
  return <HubViewTemplate hub={hub} />;
};

HubViewer.propTypes = {
  item: PropTypes.object.isRequired
};

export default getItemLoader(HubViewer, hubResource);
