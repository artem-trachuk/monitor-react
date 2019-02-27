import React, { Component } from "react";
import { Button, Header, Icon, Image, Modal } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { deleteDataByAPI } from "../actions/dataActions";
import { connect } from "react-redux";
import { List } from "semantic-ui-react/dist/commonjs/elements/List";

class DocEditorOrganism extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  callback = () => {
    this.props.deleteData(
      this.props.resource,
      this.props.id,
      this.props.queryId
    );
  };
  render() {
    return (
      <div>
        <Icon name="file" /> {this.props.originalname}{" "}
        <Icon
          name="trash"
          className={"pointer_on_hover"}
          color={"red"}
          onClick={() => this.open()}
        />
        <Modal
          open={this.state.open}
          onOpen={this.open}
          onClose={this.close}
          basic
          size="small"
        >
          <Header
            icon="trash"
            content={<FormattedMessage id={"string.deleteDoc"} />}
          />
          <Modal.Content>
            <p>
              <FormattedMessage id={"string.deleteDocMessage"} />
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="green" inverted onClick={() => this.close()}>
              <Icon name="remove" /> <FormattedMessage id={"interface.no"} />
            </Button>
            <Button
              color="red"
              inverted
              onClick={() => {
                this.callback();
                this.close();
              }}
            >
              <Icon name="trash" />{" "}
              <FormattedMessage id={"interface.yes"} />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

DocEditorOrganism.propTypes = {
  resource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  queryId: PropTypes.string.isRequired,
  originalname: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    deleteData: (resourceName, id, queryId) => {
      dispatch(deleteDataByAPI(resourceName, id, "document", queryId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DocEditorOrganism);
