import React, { Component } from "react";
import { companyResource } from "../helpers/resourceNames";
import { setNavigatedLink } from "../actions/navigationActions";
import { connect } from "react-redux";
import { getDataByAPI } from "../actions/dataActions";
import NetworksTemplate from "../templates/NetworksTemplate";
import LoadingTemplate from "../templates/LoadingTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";
import ErrorTemplate from "../templates/ErrorTemplate";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";

class Networks extends Component {
  componentDidMount() {
    this.props.setNavigatedLink("networks");
    this.props.getDataByAPI(companyResource);
  }

  componentWillUnmount() {
    this.props.setNavigatedLink("");
  }

  render() {
    const isFetching = this.props.dataReducer.isFetching;
    const companies = this.props.companies;
    const length = companies.length;
    const error = this.props.error;
    return (
      <>
        {error && <ErrorTemplate />}
        {isFetching && length === 0 && <LoadingTemplate />}
        {!isFetching && length === 0 && (
          <NoDataTemplate>
            <Button as={Link} to={"/r/companies/add"}>
              <Icon name="industry" />{" "}
              <FormattedMessage id="interface.addCompany" />
            </Button>
          </NoDataTemplate>
        )}
        {length > 0 && (
          <>
            <NetworksTemplate companies={companies} />
          </>
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const companies = state.dataReducer[companyResource] || [];
  const error = state.issuesReducer.issuesError[companyResource] || null;
  return {
    loadingReducer: state.loadingReducer,
    dataReducer: state.dataReducer,
    companies,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNavigatedLink: link => {
      dispatch(setNavigatedLink(link));
    },
    getDataByAPI: (resource, id) => {
      dispatch(getDataByAPI(resource, id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Networks);
