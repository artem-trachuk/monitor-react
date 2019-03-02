import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";
import { deleteDataByAPI } from "../actions/dataActions";
import { deleteContact } from "../actions/contactsActions";
import { contactsResource } from "../helpers/resourceNames";

class DeleteDataByIdDialog extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
    this.deleteData = this.deleteData.bind(this);
  }
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  deleteData = () => {
    this.props.deleteData(this.props.resourceName, this.props.id);
  };
  render() {
    return (
      <Modal
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        size={"tiny"}
        trigger={
          <Dropdown.Item>
            <Icon name="trash" /> <FormattedMessage id="interface.delete" />
          </Dropdown.Item>
        }
        basic
      >
        <Header icon="trash" content={this.props.header} />
        <Modal.Content>
          <p>{this.props.body}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="green" inverted onClick={() => this.close()}>
            <Icon name="remove" /> <FormattedMessage id={"interface.no"} />
          </Button>
          <Button
            color="red"
            inverted
            onClick={() => {
              this.close();
              if (this.props.resourceName === contactsResource) {
                this.props.deleteContact(this.props.id);
              } else {
                this.deleteData();
              }
            }}
          >
            <Icon name="trash" /> <FormattedMessage id={"interface.yes"} />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

DeleteDataByIdDialog.propTypes = {
  resourceName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    deleteData: (resourceName, id) => {
      dispatch(deleteDataByAPI(resourceName, id));
    },
    deleteContact: id => dispatch(deleteContact(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteDataByIdDialog);
