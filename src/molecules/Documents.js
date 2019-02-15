import React from "react";
import PropTypes from "prop-types";
import { Divider, List } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import { Header } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

const Documents = props => {
  const documents = props.documents
    ? props.documents.map(doc => (
        <List.Item as="a" href={"/" + doc.path} key={doc.path}>
          <Icon name="file" /> {doc.originalname}
        </List.Item>
      ))
    : null;
  return documents ? (
    <div className="eight wide column">
      <Divider />
      <Header as="h2">
        <Icon name="file pdf" />
        <Header.Content>
          <FormattedMessage id="companyEditor.documents" />
        </Header.Content>
        <List>{documents}</List>
      </Header>
    </div>
  ) : null;
};

Documents.propTypes = {};

export default Documents;
