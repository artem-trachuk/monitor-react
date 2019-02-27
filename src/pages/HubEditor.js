import React from "react";
import PropTypes from "prop-types";
import { getItemLoader } from "../HOCs/ItemLoader";
import { hubResource } from "../helpers/resourceNames";
import Editor from "../HOCs/Editor";
import HubEditForm from "../organisms/HubEditForm";

const HubEditor = props => {
  const hub = props.item;
  return (
    <Editor
      resource={hubResource}
      photos={hub.photos}
      documents={hub.documents}
      initialValues={{ ...hub, photos: undefined, documents: undefined }}
    >
      <HubEditForm />
    </Editor>
  );
};

HubEditor.propTypes = {
  item: PropTypes.object.isRequired
};

export default getItemLoader(HubEditor, hubResource);
