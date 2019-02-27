import React, { Component } from "react";
import { fetchContact } from "../actions/contactsActions";
import { connect } from "react-redux";
import ContactTemplate from "../templates/ContactTemplate";
import LoadingTemplate from "../templates/LoadingTemplate";

class ContactPage extends Component {
  componentDidMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  render() {
    const contact =
      this.props.contacts.find(c => c._id === this.props.match.params.id) ||
      undefined;
    return (
      <>
        {!contact && <LoadingTemplate />}
        {contact && <ContactTemplate contact={contact} />}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactsReducer.contacts || []
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
