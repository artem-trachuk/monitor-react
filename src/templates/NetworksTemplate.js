import React from "react";
import PropTypes from "prop-types";
import NetworksCompany from "../organisms/NetworksCompany";
import { Button, Divider, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const NetworksTemplate = props => {
  const companies = props.companies;
  return (
    <div className="ui container">
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <Button as={Link} to={"/r/companies/add"}>
              <Icon name="industry" />{" "}
              <FormattedMessage id="interface.addCompany" />
            </Button>
          </div>
        </div>
        <Divider />
        {companies.map(company => (
          <NetworksCompany key={company._id} company={company} />
        ))}
      </div>
    </div>
  );
};

NetworksTemplate.propTypes = {
  companies: PropTypes.array.isRequired
};

export default NetworksTemplate;
