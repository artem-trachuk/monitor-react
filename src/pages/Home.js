import React, { Component } from "react";
import { getIssues } from "../actions/issuesActions";
import { connect } from "react-redux";
import { setNavigatedLink } from "../actions/navigationActions";
import LoadingTemplate from "../templates/LoadingTemplate";
import HomeTemplate from "../templates/HomeTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";
import ErrorTemplate from "../templates/ErrorTemplate";

const issuesResource = "all";

class Home extends Component {
  componentDidMount() {
    this.props.setNavigatedLink("home");
    // get issues from the API
    this.props.getIssues(issuesResource);
  }

  componentWillUnmount() {
    // remove page name to remove highlight in the navigation bar
    this.props.setNavigatedLink("");
  }
  render() {
    const isFetching = this.props.isFetching;
    const issues = this.props.issues;
    const length = issues.length;
    const displayName = this.props.userReducer.user.displayName;
    const defaultCenter = this.props.userReducer.defaultCenter;
    const error = this.props.error;
    return (
      <>
        {error && <ErrorTemplate />}
        {isFetching && length === 0 && <LoadingTemplate />}
        {!isFetching && length === 0 && <NoDataTemplate />}
        {length > 0 && (
          <HomeTemplate
            displayName={displayName}
            issues={issues}
            defaultCenter={defaultCenter}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const issues = state.issuesReducer[issuesResource] || [];
  const isFetching =
    state.issuesReducer.isIssuesFetching[issuesResource] || false;
  const error = state.issuesReducer.issuesError[issuesResource] || null;
  return {
    error,
    issues,
    isFetching,
    userReducer: state.userReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getIssues: (byWhat, id) => {
      dispatch(getIssues(byWhat, id));
    },
    setNavigatedLink: link => {
      dispatch(setNavigatedLink(link));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
