import React from "react";
import { Form } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Field } from "redux-form";
import inputField from "../molecules/FileInputField";
import { renderField } from "../molecules/renderField";
import { requiredValidator } from "../helpers/reduxFormValidators";

const HubEditForm = props => {
  return (
    <div className="eight wide column">
      <Form.Field>
        <label>
          <FormattedMessage id="editor.name" />
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
          <FormattedMessage id="editor.note" />
        </label>
        <Field name="note" component="textarea" rows={3} />
      </Form.Field>
      <Field
        component={inputField}
        text={<FormattedMessage id={"companyEditor.uploadPhotos"} />}
        icon="file image"
        name="photos"
      />
      <Field
        component={inputField}
        text={<FormattedMessage id={"companyEditor.uploadDocuments"} />}
        icon="file pdf"
        name="documents"
      />
    </div>
  );
};

HubEditForm.propTypes = {};

export default HubEditForm;
