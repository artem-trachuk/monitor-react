import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Divider, Header, Icon, Image } from "semantic-ui-react";
import { serverURL } from "../helpers/serverURL";
import CompanyHub from "../molecules/CompanyHub";
import { FormattedMessage } from "react-intl";

const NetworksCompany = props => {
  const company = props.company;
  return (
    <>
      <div className="row">
        <div className="eight wide column">
          <Link to={"/r/companies/view/" + company._id}>
            {company.logo ? (
              <Image className={"viwerLogo"} src={serverURL + company.logo.path} />
            ) : (
              <Header as="h1">
                <Icon name="industry" />{" "}
                <Header.Content>{company.name}</Header.Content>
              </Header>
            )}
          </Link>
        </div>
      </div>
      <div className="four column row stackable">
        {company.hubs && company.hubs.length > 0 ? (
          company.hubs.map(hub => <CompanyHub key={hub._id} hub={hub} />)
        ) : (
          <div className="column">
            <FormattedMessage id="string.companyHasNoHubs" />
          </div>
        )}
      </div>
      <div className="row">
        <div className="column">
          <Button
            as={Link}
            to={"/r/hubs/add/" + company._id + "/" + company.name}
          >
            <Icon name="plus" />{" "}
            <FormattedMessage
              id="interface.addHubToCompany"
              values={{ company: company.name }}
            />
          </Button>
        </div>
      </div>
      <Divider />
    </>
  );
};

NetworksCompany.propTypes = {
  company: PropTypes.object.isRequired
};

export default NetworksCompany;
