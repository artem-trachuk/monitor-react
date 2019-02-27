import React from "react";
import PropTypes from "prop-types";
import { Dropdown, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AddContact from "../organisms/AddContact";
import DeleteDataByIdDialog from "./DeleteDataByIdDialog";
import { companyResource } from "../helpers/resourceNames";

const CompanySettings = props => {
  const company = props.company;
  const deleteCompany = props.deleteCompany;
  return (
    <Dropdown
      pointing={"top right"}
      item
      icon={{ name: "wrench", size: "big" }}
    >
      <Dropdown.Menu>
        {company.create && (
          <>
            <Dropdown.Item
              as={Link}
              to={"/r/hubs/add/" + company._id + "/" + company.name}
            >
              <Icon name="warehouse" />{" "}
              <FormattedMessage id="interface.addHub" />
            </Dropdown.Item>
            <AddContact company={company._id} />
          </>
        )}
        {company.update && (
          <>
            <Dropdown.Divider />
            <Dropdown.Item as={Link} to={"/r/companies/edit/" + company._id}>
              <Icon name="edit" /> <FormattedMessage id="interface.edit" />
            </Dropdown.Item>
            <Dropdown.Item disabled>
              <Icon name="archive" />{" "}
              <FormattedMessage id="interface.archive" />
            </Dropdown.Item>
            {deleteCompany && (
              <DeleteDataByIdDialog
                header={<FormattedMessage id={"string.deleteCompanyHeader"} />}
                body={
                  <FormattedMessage
                    id={"string.deleteCompanyBody"}
                    values={{ company: company.name }}
                  />
                }
                id={company._id}
                resourceName={companyResource}
              />
            )}
          </>
        )}
        {company.isOwner && (
          <>
            <Dropdown.Divider />
            <Dropdown.Item
              as={Link}
              to={"/r/permissions/" + company._id + "/" + company.name}
            >
              <Icon name="shield alternate" />{" "}
              <FormattedMessage id="interface.permissions" />
            </Dropdown.Item>
          </>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

CompanySettings.propTypes = {};

export default CompanySettings;
