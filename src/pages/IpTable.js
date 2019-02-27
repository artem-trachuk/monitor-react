import React, { Component } from "react";
import { companyResource, ipResource } from "../helpers/resourceNames";
import { setNavigatedLink } from "../actions/navigationActions";
import { getDataByAPI } from "../actions/dataActions";
import { connect } from "react-redux";
import ErrorTemplate from "./Networks";
import LoadingTemplate from "../templates/LoadingTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";
import IpTableTemplate from "../organisms/IpTableTemplate";

class IpTable extends Component {
  componentDidMount() {
    this.props.setNavigatedLink("iptable");
    this.props.getDataByAPI(ipResource);
  }

  componentWillUnmount() {
    this.props.setNavigatedLink("");
  }
  render() {
    const isFetching = this.props.isFetching;
    const ip = this.props.ip;
    const error = this.props.error;
    const length = ip.length;
    return (
      <>
        {error && <ErrorTemplate />}
        {isFetching && length === 0 && <LoadingTemplate />}
        {!isFetching && length === 0 && <NoDataTemplate />}
        {length > 0 && <IpTableTemplate ip={ip} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  const ip = state.dataReducer[ipResource] || [];
  const error = state.issuesReducer.issuesError[ipResource] || null;
  const isFetching = state.dataReducer.isFetching || false;
  return {
    ip,
    error,
    isFetching
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
)(IpTable);
