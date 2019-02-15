import React from "react";
import PropTypes from "prop-types";
import { getItemLoader } from "../HOCs/ItemLoader";
import { companyResource } from "../helpers/resourceNames";
import Editor from "../HOCs/Editor";
import CompanyEditHeader from "../molecules/CompanyEditHeader";
import CompanyEditForm from "../organisms/CompanyEditForm";

const CompanyEditor = props => {
  const company = props.item;
  return (
    <Editor
      initialValues={{
        ...company,
        photos: undefined,
        documents: undefined,
        logo: undefined
      }}
      header={<CompanyEditHeader />}
      resource={companyResource}
    >
      <CompanyEditForm />
    </Editor>
  );
};

CompanyEditor.propTypes = {
  item: PropTypes.object.isRequired
};

export default getItemLoader(CompanyEditor, companyResource);
