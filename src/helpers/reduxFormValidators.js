export const requiredValidator = value =>
  value || typeof value === "number"
    ? undefined
    : "companyEditor.validationError";
