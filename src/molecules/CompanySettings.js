import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AddContact from "../organisms/AddContact";

const CompanySettings = props => {
  const company = props.company;
  return (
    <Dropdown
      pointing={"top right"}
      item
      icon={{ name: "wrench", size: "big" }}
    >
      <Dropdown.Menu>
        {company.create && (
          <Dropdown.Item
            as={Link}
            to={"/r/hubs/add/" + company._id + "/" + company.name}
          >
            <Icon name="warehouse" /> <FormattedMessage id="interface.addHub" />
          </Dropdown.Item>
        )}
        <AddContact company={company._id} />
        <Dropdown.Item as={Link} to={"/r/companies/edit/" + company._id}>
          <Icon name="edit" /> <FormattedMessage id="companyEditor.edit" />
        </Dropdown.Item>
        {company.isOwner && (
          <Dropdown.Item
            as={Link}
            to={"/r/permissions/" + company._id + "/" + company.name}
          >
            <Icon name="shield alternate" />{" "}
            <FormattedMessage id="interface.permissions" />
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CompanySettings.propTypes = {};

export default CompanySettings;
