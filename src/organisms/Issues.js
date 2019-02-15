import React, { Component } from "react";
import {
  Button,
  Checkbox,
  Comment,
  Divider,
  Form,
  Header,
  Icon
} from "semantic-ui-react";
import {
  FormattedDate,
  FormattedMessage,
  FormattedRelative,
  FormattedTime,
  injectIntl
} from "react-intl";
import { getIssues, sendIssue } from "../actions/issuesActions";
import { connect } from "react-redux";
import Load from "../helpers/Load";
import CommentReplyForm from "../molecules/CommentReplyForm";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: "",
      collapsed: false
    };

    this.handleIssueForm = this.handleIssueForm.bind(this);
  }

  componentDidMount() {
    this.props.getIssues("hub", this.props.hub._id);
  }

  handleIssueForm(value) {
    this.setState({
      issue: value
    });
  }
  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked });
  render() {
    const { collapsed } = this.state;
    const { intl } = this.props;
    let view = <></>;
    const id = this.props.hub._id;
    const issues = this.props.issuesReducer[id] || [];
    if (this.props.issuesReducer.isIssuesFetching[id]) {
      view = (
        <div className="row">
          <Load />
        </div>
      );
    } else if (this.props.issuesReducer.issuesError[id]) {
      view = (
        <div className="row">
          <div className="eight wide column center aligned">
            <Header icon>
              <Icon name="frown outline" />
              Oops! Something went wrong...
            </Header>
            <Divider />
            <code>{this.props.issuesReducer.error.toString()}</code>
          </div>
        </div>
      );
    } else if (issues) {
      const comments = issues.map(comment => {
        return (
          <Comment key={comment._id}>
            <Comment.Avatar src={comment.user.picture} />
            <Comment.Content>
              <Comment.Author as="a">{comment.user.name}</Comment.Author>
              <Comment.Metadata>
                <div>
                  <FormattedDate value={comment.date} />{" "}
                  <FormattedTime value={comment.date} /> (
                  <FormattedRelative value={comment.date} />)
                </div>
              </Comment.Metadata>
              <Comment.Text>{comment.message}</Comment.Text>
              {comment.open && (
                <CommentReplyForm
                  issue={comment._id}
                  sendIssue={this.props.sendIssue}
                />
              )}
            </Comment.Content>
            <Comment.Group collapsed={collapsed}>
              {comment.replies.map(reply => {
                return (
                  <Comment key={reply._id}>
                    <Comment.Avatar src={reply.user.picture} />
                    <Comment.Content>
                      <Comment.Author as="a">{reply.user.name}</Comment.Author>
                      <Comment.Metadata>
                        <div>
                          <FormattedDate value={reply.date} />{" "}
                          <FormattedTime value={reply.date} /> (
                          <FormattedRelative value={reply.date} />)
                        </div>
                      </Comment.Metadata>
                      <Comment.Text>{reply.reply}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                );
              })}
            </Comment.Group>
          </Comment>
        );
      });
      view = (
        <div className="row">
          <div className="sixteen wide column">
            <Comment.Group threaded>
              <Header as="h3">
                <Icon name={"stethoscope"} />{" "}
                <FormattedMessage id="interface.issue" />
              </Header>
              <Checkbox
                checked={this.state.collapsed}
                label={intl.formatMessage({ id: "interface.collapseComments" })}
                onChange={this.handleCheckbox}
              />
              {comments}
              <Divider />
              {this.props.update && (
                <Form reply>
                  <Form.TextArea
                    onChange={(e, { value }) => this.handleIssueForm(value)}
                  />
                  <Button
                    type={"button"}
                    content={<FormattedMessage id="interface.addIssue" />}
                    labelPosition="left"
                    icon="bug"
                    primary
                    disabled={this.state.issue.length < 1}
                    onClick={() =>
                      this.props.sendIssue({
                        hub: this.props.hub._id,
                        issue: this.state.issue
                      })
                    }
                  />
                </Form>
              )}
            </Comment.Group>
          </div>
        </div>
      );
    }
    return view;
  }
}

const mapStateToProps = state => {
  return {
    issuesReducer: state.issuesReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendIssue: (issue, issueId) => {
      dispatch(sendIssue(issue, issueId));
    },
    getIssues: (byWhat, id) => {
      dispatch(getIssues(byWhat, id));
    }
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Issues)
);
