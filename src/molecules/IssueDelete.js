import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Header, Icon, Modal, Popup } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class IssueDelete extends Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });
  render() {
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Popup
            trigger={
              <Icon
                onClick={() => this.handleOpen()}
                name={"trash"}
                className={"pointer_on_hover red_color_on_hover"}
              />
            }
            content={
              this.props.replyId ? (
                <FormattedMessage id={"interface.deleteReply"} />
              ) : (
                <FormattedMessage id={"interface.deleteIssue"} />
              )
            }
            basic
          />
        }
        basic
        size="small"
      >
        <Header
          icon="trash"
          content={
            this.props.replyId ? (
              <FormattedMessage id={"interface.deleteReply"} />
            ) : (
              <FormattedMessage id={"interface.deleteIssue"} />
            )
          }
        />
        <Modal.Content>
          <p>
            {this.props.replyId ? (
              <FormattedMessage id={"string.deleteReply"} />
            ) : (
              <FormattedMessage id={"string.deleteIssue"} />
            )}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.handleClose();
            }}
            basic
            color="green"
            inverted
          >
            <Icon name="remove" /> {<FormattedMessage id={"interface.no"} />}
          </Button>
          <Button
            onClick={() => {
              this.props.delete(this.props._id, this.props.replyId);
              this.handleClose();
            }}
            color="red"
            inverted
          >
            <Icon name="checkmark" />{" "}
            {<FormattedMessage id={"interface.yes"} />}
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

IssueDelete.propTypes = {};

export default IssueDelete;
