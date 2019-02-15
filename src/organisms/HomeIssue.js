import React from "react";
import PropTypes from "prop-types";
import { Comment, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HomeIssue = props => {
  const issue = props.issue;
  return (
    <Comment>
      <Comment.Avatar src={issue.user.picture} />
      <Comment.Content>
        <Comment.Author as="a">{issue.user.name}</Comment.Author>
        <Comment.Metadata>
          <div>
            <Icon name={"industry"} />
            <Link to={"/r/companies/view/" + issue.company._id}>
              {issue.company.name}
            </Link>{" "}
            <Icon name="warehouse" />
            <Link to={"/r/hubs/view/" + issue.hub._id}>{issue.hub.name}</Link>
          </div>
        </Comment.Metadata>
        <Comment.Text>{issue.message}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
};

HomeIssue.propTypes = {
  issue: PropTypes.object.isRequired
};

export default HomeIssue;
