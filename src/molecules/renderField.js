import { FormattedMessage } from "react-intl";
import React from "react";
import { Input, Label } from "semantic-ui-react";

// TODO update error message on language change
export const renderField = ({
  input,
  label,
  type,
  icon,
  iconPosition,
  meta: { touched, error, warning }
}) => (
  <>
    <Input
      {...input}
      icon={icon}
      iconPosition={iconPosition}
      placeholder={label}
      type={type}
    />
    {touched &&
      ((error && (
        <Label basic color="red" pointing>
          <FormattedMessage id={error} />
        </Label>
      )) ||
        (warning && <span>{warning}</span>))}
  </>
);
