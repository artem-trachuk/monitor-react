export const requiredValidator = value =>
  value || typeof value === "number"
    ? undefined
    : "string.validationError";
