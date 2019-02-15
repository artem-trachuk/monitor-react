import React, { Component } from "react";
import { Checkbox, Comment } from "semantic-ui-react";
import { Button, Form } from "semantic-ui-react";
import {FormattedMessage, injectIntl} from "react-intl";

class CommentReplyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      reply: "",
      checked: false
    };
    this.handleIssueForm = this.handleIssueForm.bind(this);
  }
  handleIssueForm(value) {
    this.setState({
      reply: value
    });
  }
  render() {
    const { intl } = this.props;
    return (
      <>
        <Comment.Actions>
          <Comment.Action
            onClick={e => this.setState({ show: !this.state.show })}
          >
            <FormattedMessage id={"interface.reply"}/>
          </Comment.Action>
        </Comment.Actions>
        {this.state.show && (
          <Form reply>
            <Form.TextArea
              onChange={(e, { value }) => this.handleIssueForm(value)}
            />
            <Button
              type={"button"}
              onClick={() =>
                this.props.sendIssue(
                  { reply: this.state.reply, open: !this.state.checked },
                  this.props.issue
                )
              }
              disabled={this.state.reply.length < 1}
              content={intl.formatMessage({ id: "interface.addReply" })}
              labelPosition="left"
              icon="edit"
              primary
            />
            <Checkbox
              onChange={(e, data) => this.setState({ checked: data.checked })}
              label={intl.formatMessage({ id: "interface.solved" })}
            />
          </Form>
        )}
      </>
    );
  }
}

export default injectIntl(CommentReplyForm);
