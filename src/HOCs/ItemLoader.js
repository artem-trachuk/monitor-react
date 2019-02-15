import React, { Component } from "react";
import { getDataByAPI } from "../actions/dataActions";
import { connect } from "react-redux";
import LoadingTemplate from "../templates/LoadingTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";

/**
 * HOC. Returns Viewer for desired resource. Id of resource should be in url params as :id
 * @param WrappedComponent Component name to wrap
 * @param resource Resource name for API calls, for example "companies"
 */
export function getItemLoader(WrappedComponent, resource) {
  class ItemLoader extends Component {
    componentDidMount() {
      // Get data by API call in Redux
      this.props.getDataByAPI(resource, this.props.match.params.id);
    }

    render() {
      // data is fetching
      const isFetching = this.props.isFetching;
      // array of items by resource param
      const items = this.props.items;
      // id from react-router-dom
      const id = this.props.match.params.id;
      // item by id
      const item = items.find(i => i._id === id);
      return (
        <>
          {isFetching && !item && <LoadingTemplate />}
          {!isFetching && !item && <NoDataTemplate />}
          {item && <WrappedComponent item={item} />}
        </>
      );
    }
  }

  const mapStateToProps = state => {
    const items = state.dataReducer[resource] || [];
    const isFetching = state.dataReducer.isFetching;
    return { items, isFetching };
  };

  const mapDispatchToProps = dispatch => {
    return {
      getDataByAPI: (resource, id) => {
        dispatch(getDataByAPI(resource, id));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemLoader);
}
