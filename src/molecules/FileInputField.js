import React from "react";
import { Button, Icon } from "semantic-ui-react";

const FileInputField = props => {
  function onChange(e) {
    const {
      input: { onChange }
    } = props;
    onChange(e.target.files);
  }
  const {
    icon,
    text,
    input: { name }
  } = props;
  return (
    <>
      <Button as="label" htmlFor={name} icon labelPosition="right">
        {text}
        <Icon name={icon} />
      </Button>
      {name === "documents" ? (
        <input
          name={name}
          hidden
          id={name}
          multiple
          type="file"
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          hidden
          id={name}
          multiple
          type="file"
          accept="image/*"
          onChange={onChange}
        />
      )}
    </>
  );
};

export default FileInputField;
