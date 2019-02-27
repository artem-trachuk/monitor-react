import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Icon, Modal, Popup, TextArea } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class IssueEdit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modalOpen: false,
      text: props.text
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

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
                name={"edit"}
                className={"pointer_on_hover green_color_on_hover"}
              />
            }
            content={
              this.props.replyId ? (
                <FormattedMessage id={"interface.editReply"} />
              ) : (
                <FormattedMessage id={"interface.editIssue"} />
              )
            }
            basic
          />
        }
        size={"tiny"}
      >
        <Modal.Header>
          {this.props.replyId ? (
            <FormattedMessage id={"interface.editReply"} />
          ) : (
            <FormattedMessage id={"interface.editIssue"} />
          )}
        </Modal.Header>
        <Modal.Content>
          <TextArea
            rows={4}
            style={{ width: "100%", display: "block" }}
            value={this.state.text}
            onChange={this.handleChange}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button
            onClick={() => {
              this.handleClose();
            }}
          >
            <FormattedMessage id={"interface.cancel"} />
          </Button>
          <Button
            onClick={() => {
              this.handleClose();
              this.props.patch(
                { message: this.state.text },
                this.props._id,
                this.props.replyId
              );
            }}
            positive
            icon="save"
            labelPosition="right"
            content={<FormattedMessage id={"interface.save"} />}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

IssueEdit.propTypes = {};

export default IssueEdit;
