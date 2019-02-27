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
import {
  deleteIssue,
  getIssues,
  patchIssue,
  sendIssue
} from "../actions/issuesActions";
import { connect } from "react-redux";
import Load from "../helpers/Load";
import CommentReplyForm from "../molecules/CommentReplyForm";
import IssueUnlock from "../molecules/IssueUnlock";
import { getUserId } from "../actions/userActions";
import IssueDelete from "../molecules/IssueDelete";
import IssueEdit from "../molecules/IssueEdit";

class Issues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issue: "",
      collapsed: false
    };

    this.handleIssueForm = this.handleIssueForm.bind(this);
    this.unlockIssue = this.unlockIssue.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.patchIssue = this.patchIssue.bind(this);
  }

  componentDidMount() {
    this.props.getIssues("hub", this.props.hub._id);
    this.props.getUserId();
  }

  handleIssueForm(value) {
    this.setState({
      issue: value
    });
  }

  handleCheckbox = (e, { checked }) => this.setState({ collapsed: checked });

  unlockIssue(issueId) {
    this.props.patchIssue(null, issueId, true);
  }

  patchIssue(issue, issueId, replyId = false) {
    if (replyId) {
      this.props.patchIssue(issue, issueId, false, replyId);
    } else {
      this.props.patchIssue(issue, issueId);
    }
  }

  deleteIssue(issueId, replyId = false) {
    this.props.deleteIssue(issueId, replyId);
  }

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
                  <FormattedRelative value={comment.date} />
                  {comment.edited && (
                    <>
                      {", "}
                      <FormattedMessage id={"interface.edited"} />{" "}
                      <FormattedRelative value={comment.edited} />
                    </>
                  )}
                  ){" "}
                  {this.props.userId === comment.user._id && (
                    <IssueEdit
                      text={comment.message}
                      _id={comment._id}
                      replyId={false}
                      patch={this.patchIssue}
                    />
                  )}
                  {this.props.userId === comment.user._id && (
                    <IssueDelete
                      _id={comment._id}
                      replyId={false}
                      delete={this.deleteIssue}
                    />
                  )}
                  {!comment.open && this.props.userId === comment.user._id && (
                    <IssueUnlock _id={comment._id} unlock={this.unlockIssue} />
                  )}
                </div>
              </Comment.Metadata>
              <Comment.Text>
                {comment.message}
              </Comment.Text>
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
                          <FormattedRelative value={reply.date} />
                          {reply.edited && (
                            <>
                              {", "}
                              <FormattedMessage id={"interface.edited"} />{" "}
                              <FormattedRelative value={reply.edited} />
                            </>
                          )}
                          ){" "}
                          {this.props.userId === reply.user._id && (
                            <IssueEdit
                              text={reply.reply}
                              _id={comment._id}
                              replyId={reply._id}
                              patch={this.patchIssue}
                            />
                          )}
                          {this.props.userId === reply.user._id && (
                            <IssueDelete
                              _id={comment._id}
                              replyId={reply._id}
                              delete={this.deleteIssue}
                            />
                          )}
                        </div>
                      </Comment.Metadata>
                      <Comment.Text>{reply.reply}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                );
              })}
              {comment.open && (
                <CommentReplyForm
                  issue={comment._id}
                  sendIssue={this.props.sendIssue}
                />
              )}
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
    issuesReducer: state.issuesReducer,
    userId: state.userReducer.userId || false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendIssue: (issue, issueId) => {
      dispatch(sendIssue(issue, issueId));
    },
    getIssues: (byWhat, id) => {
      dispatch(getIssues(byWhat, id));
    },
    getUserId: () => dispatch(getUserId()),
    patchIssue: (issue, issueId, unlock, replyId) => {
      dispatch(patchIssue(issue, issueId, unlock, replyId));
    },
    deleteIssue: (issueId, replyId) => {
      dispatch(deleteIssue(issueId, replyId));
    }
  };
};

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Issues)
);
