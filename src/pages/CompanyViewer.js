import React from "react";
import { companyResource } from "../helpers/resourceNames";
import { getItemLoader } from "../HOCs/ItemLoader";
import CompanyViewTemplate from "../templates/CompanyViewTemplate";
import PropTypes from "prop-types";

function CompanyViewer(props) {
  const company = props.item;
  return <CompanyViewTemplate company={company} />;
}

CompanyViewer.propTypes = {
  item: PropTypes.object.isRequired
};

export default getItemLoader(CompanyViewer, companyResource);
