import "./FormField.css";
import { Field } from "formik";
import { ErrorMessage } from "formik";
import { FormFieldErrorMessage } from "./FormFieldErrorMessage";

export const TextAreaFormField = (props) => {
  return (
    <div className="form-field">
      <label htmlFor={props.name} className="form-field__label">
        {props.label}
      </label>
      <Field as="textarea" name={props.name} className="form-field__input" />
      <ErrorMessage name={props.name}>{(msg) => <FormFieldErrorMessage message={msg} />}</ErrorMessage>
    </div>
  );
};
