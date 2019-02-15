import React from "react";
import Editor from "../HOCs/Editor";
import HubEditForm from "../organisms/HubEditForm";
import { hubResource } from "../helpers/resourceNames";

const HubAdder = props => {
  const company = props.match.params.companyId;
  return (
    <Editor initialValues={{ company: company }} resource={hubResource}>
      <HubEditForm />
    </Editor>
  );
};

export default HubAdder;
