import React from "react";
import Editor from "../HOCs/Editor";
import CompanyEditForm from "../organisms/CompanyEditForm";
import { companyResource } from "../helpers/resourceNames";
import CompanyAddHeader from "../molecules/CompanyAddHeader";

const CompanyAdder = props => {
  return (
    <Editor
      resource={companyResource}
      initialValues={{}}
      header={<CompanyAddHeader />}
    >
      <CompanyEditForm />
    </Editor>
  );
};

export default CompanyAdder;
