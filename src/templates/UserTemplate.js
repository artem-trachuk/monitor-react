import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const UserTemplate = props => {
  const user = props.user;
  const companies = props.companies;
  const logout = props.logout;
  const userId = props.userId;
  return (
    <div className={"ui container"}>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <Image src={user.photoURL} size="tiny" />
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h2">{user.displayName}</Header>
            Id: {userId}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={4} divided centered>
            {companies.map(company => (
              <Grid.Column style={{fontSize: "1.4rem"}} key={company._id}>
                <Link to={"/r/companies/view/" + company._id}>
                  {company.name}
                </Link>{" "}
                <Link to={"/r/permissions/" + company._id + "/" + company.name}>
                  <Icon name={"shield alternate"} />
                </Link>
              </Grid.Column>
            ))}
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              color="green"
              type="button"
              onClick={() => logout()}
              icon
              labelPosition="right"
            >
              <FormattedMessage id="interface.signOut" />
              <Icon name="sign-out" />
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

UserTemplate.propTypes = {
  user: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired,
  logout: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired
};

export default UserTemplate;
