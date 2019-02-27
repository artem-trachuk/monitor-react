import React, { Component } from "react";
import PropTypes from "prop-types";
import { serverURL } from "../helpers/serverURL";
import { Button, Header, Icon, Image, Label, Modal } from "semantic-ui-react";
import { deleteDataByAPI } from "../actions/dataActions";
import { connect } from "react-redux";
import DeleteDataByIdDialog from "../molecules/DeleteDataByIdDialog";
import {FormattedMessage} from "react-intl";

class PhotoEditorOrganism extends Component {
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
        <Image
          label={{
            as: "a",
            color: "red",
            corner: "right",
            icon: "trash",
            onClick: () => this.open()
          }}
          fluid
          src={serverURL + this.props.src}
        />
        <Modal
          open={this.state.open}
          onOpen={this.open}
          onClose={this.close}
          basic
          size="small"
        >
          <Header icon="trash" content={<FormattedMessage id={"string.deletePhoto"} />} />
          <Modal.Content>
            <p>
              <FormattedMessage id={"string.deletePhotoMessage"} />
            </p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color="green" inverted onClick={() => this.close()}>
              <Icon name="remove" /> <FormattedMessage id={"interface.no"} />
            </Button>
            <Button color="red" inverted onClick={() => {this.callback(); this.close();}}>
              <Icon name="trash" /> <FormattedMessage id={"interface.yes"} />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

PhotoEditorOrganism.propTypes = {
  src: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  queryId: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    deleteData: (resourceName, id, queryId) => {
      dispatch(deleteDataByAPI(resourceName, id, "photo", queryId));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PhotoEditorOrganism);
