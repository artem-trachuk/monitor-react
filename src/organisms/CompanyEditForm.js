import React from "react";
import { Form } from "semantic-ui-react";
import { FormattedMessage } from "react-intl";
import { Field } from "redux-form";
import { renderField } from "../molecules/renderField";
import { requiredValidator } from "../helpers/reduxFormValidators";
import inputField from "../molecules/FileInputField";

// TODO fix buttons language on language changes
const CompanyEditForm = () => {
  return (
    <>
      <div className="eight wide column">
        <Form.Field>
          <label>
            <FormattedMessage id="editor.name" />
          </label>
          <Field
            icon="industry"
            iconPosition="left"
            name="name"
            component={renderField}
            type="text"
            validate={requiredValidator}
          />
        </Form.Field>
        <Form.Field>
          <label>
            <FormattedMessage id="companyEditor.address" />
          </label>
          <Field icon="map marker alternate" iconPosition="left" name="address" component={renderField} type="text" />
        </Form.Field>
        <Form.Field>
          <label>
            <FormattedMessage id="interface.phone" />
          </label>
          <Field icon="phone" iconPosition="left" name="phone" component={renderField} type="text" />
        </Form.Field>
        <Form.Field>
          <label>
            <FormattedMessage id="companyEditor.email" />
          </label>
          <Field icon="at" iconPosition="left" name="email" component={renderField} type="text" />
        </Form.Field>
        <Form.Field>
          <label>
            <FormattedMessage id="editor.note" />
          </label>
          <Field name="note" component="textarea" rows={3} />
        </Form.Field>
        <Field
          component={inputField}
          text={<FormattedMessage id={"editor.uploadLogo"} />}
          name="logo"
          icon="circle outline"
        />
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
    </>
  );
};

export default CompanyEditForm;
