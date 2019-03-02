import React, { Component } from "react";
import { fetchContact } from "../actions/contactsActions";
import { connect } from "react-redux";
import ContactTemplate from "../templates/ContactTemplate";
import LoadingTemplate from "../templates/LoadingTemplate";
import NoDataTemplate from "../templates/NoDataTemplate";

class ContactPage extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  render() {
    const contact =
      this.props.contacts.find(c => c._id === this.props.match.params.id) ||
      undefined;
    const isFetching = this.props.isFetching;
    return (
      <>
        {!contact && !isFetching && <NoDataTemplate />}
        {!contact && isFetching && <LoadingTemplate />}
        {contact && <ContactTemplate contact={contact} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactsReducer.contacts || [],
    isFetching: state.contactsReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContact: id => dispatch(fetchContact(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactPage);
