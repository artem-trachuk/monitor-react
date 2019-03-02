import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dropdown, Button, Icon, Modal } from "semantic-ui-react";
import { FormattedMessage, injectIntl } from "react-intl";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../molecules/renderField";
import { requiredValidator } from "../helpers/reduxFormValidators";
import { Form } from "semantic-ui-react";
import { addContact, patchContact } from "../actions/contactsActions";
import { connect } from "react-redux";

class AddContact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false
    };
  }
  open = () => this.setState({ open: true });
  close = () => this.setState({ open: false });
  submitForm = values => {
    values.company = this.props.company;
    this.props.initialValues
      ? this.props.patchContact(values)
      : this.props.addContact(values);
    this.setState({ open: false });
  };
  render() {
    const { pristine, submitting, handleSubmit } = this.props;
    return (
      <Modal
        open={this.state.open}
        onOpen={this.open}
        onClose={this.close}
        size={"tiny"}
        trigger={
          <Dropdown.Item onClick={this.open}>
            {this.props.initialValues ? (
              <>
                <Icon name="edit" />
                <FormattedMessage
                  icon
                  labelPosition="right"
                  id="interface.edit"
                />
              </>
            ) : (
              <>
                <Icon name="address book" />
                <FormattedMessage
                  icon
                  labelPosition="right"
                  id="interface.addContact"
                />
              </>
            )}
          </Dropdown.Item>
        }
      >
        {this.props.initialValues ? (
          <Modal.Header>
            <Icon name="address book" />{" "}
            <FormattedMessage id="interface.editContact" />
          </Modal.Header>
        ) : (
          <Modal.Header>
            <Icon name="address book" />{" "}
            <FormattedMessage id="interface.addContact" />
          </Modal.Header>
        )}
        <Modal.Content>
          <Form onSubmit={handleSubmit(this.submitForm)}>
            <Form.Field>
              <label>
                <FormattedMessage id="interface.humanName" />
              </label>
              <Field
                name="name"
                component={renderField}
                type="text"
                validate={requiredValidator}
              />
            </Form.Field>
            <Form.Field>
              <label>
                <FormattedMessage id="interface.phone" />
              </label>
              <Field
                name="phone"
                component={renderField}
                type="text"
                validate={requiredValidator}
              />
            </Form.Field>
            <Form.Field>
              <label>
                <FormattedMessage id="interface.note" />
              </label>
              <Field name="note" component="textarea" rows={3} />
            </Form.Field>
            <Button
              type="submit"
              icon
              labelPosition="right"
              positive
              disabled={pristine || submitting}
            >
              <FormattedMessage id="interface.save" /> <Icon name="save" />
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

AddContact.propTypes = {
  company: PropTypes.string.isRequired,
  addContact: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: contact => dispatch(addContact(contact)),
    patchContact: contact => dispatch(patchContact(contact))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(injectIntl(reduxForm({ form: "Add contact" })(AddContact)));
