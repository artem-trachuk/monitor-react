import React from "react";
import PropTypes from "prop-types";
import { Header, Icon, List } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import {serverURL} from "../helpers/serverURL";

const DocsOrganism = props => {
  const documents = props.documents
    ? props.documents.map(doc => (
        <List.Item as="a" href={serverURL + doc.path} key={doc.path}>
          <Icon name="file" /> {doc.originalname}
        </List.Item>
      ))
    : undefined;
  return (
    <>
      <div className="eight wide column viewer-block-margin">
        <Header as="h2">
          <Icon name="file pdf" />
          <Header.Content>
            <FormattedMessage id="interface.documents" />
          </Header.Content>
        </Header>
        {documents ? <List link>{documents}</List> : null}
      </div>
    </>
  );
};

DocsOrganism.propTypes = {
  documents: PropTypes.array.isRequired
};

export default DocsOrganism;
