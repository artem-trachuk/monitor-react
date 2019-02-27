import React from "react";
import { FormattedMessage } from "react-intl";
import { Field, formValueSelector } from "redux-form";
import { Form } from "semantic-ui-react";
import { renderField } from "../molecules/renderField";
import { requiredValidator } from "../helpers/reduxFormValidators";
import inputField from "../molecules/FileInputField";
import { connect } from "react-redux";
import { EditorReduxFormName } from "../helpers/editorReduxFormName";
import PropTypes from "prop-types";
import getDeviceIcon from "../helpers/getDeviceIcon";

// TODO ptz
const DeviceEditForm = props => {
  let iconName = getDeviceIcon(props.deviceType);
  return (
    <div className="eight wide column">
      <Form.Field>
        <label>
          <FormattedMessage id="interface.name" />
        </label>
        <Field
          icon={iconName}
          iconPosition="left"
          name="name"
          component={renderField}
          type="text"
          validate={requiredValidator}
        />
      </Form.Field>
      <Form.Field>
        <label>
          <FormattedMessage id="interface.ip" />
        </label>
        <Field
          icon="terminal"
          iconPosition="left"
          name="ip"
          component={renderField}
          type="text"
        />
      </Form.Field>
      <Form.Field>
        <label>
          <FormattedMessage id="interface.serial" />
        </label>
        <Field
          icon="barcode"
          iconPosition="left"
          name="serial"
          component={renderField}
          type="text"
        />
      </Form.Field>
      {props.deviceType === "camera" && (
        <Form.Field>
          <label>
            <FormattedMessage id="interface.ptz" />
          </label>
          <Field name="ptz" id="ptz" component="input" type="checkbox" />
        </Form.Field>
      )}
      <Form.Field>
        <label>
          <FormattedMessage id="interface.note" />
        </label>
        <Field name="note" component="textarea" rows={3} />
      </Form.Field>
      <Field
        component={inputField}
        text={<FormattedMessage id={"interface.uploadPhotos"} />}
        icon="file image"
        name="photos"
      />
      <Field
        component={inputField}
        text={<FormattedMessage id={"interface.uploadDocuments"} />}
        icon="file pdf"
        name="documents"
      />
    </div>
  );
};

DeviceEditForm.propTypes = {
  deviceType: PropTypes.string.isRequired
};

const selector = formValueSelector(EditorReduxFormName); // <-- same as form name
export default connect(state => {
  const deviceType = selector(state, "deviceType");
  return { deviceType };
})(DeviceEditForm);
