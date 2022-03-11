import "./FormField.css";
import { Field } from "formik";

export const SelectFormField = (props) => {
  const optionsList = props.options.map((option) => {
    return <option value={option.value}>{option.name}</option>;
  });
  return (
    <div className="form-field">
      <label htmlFor={props.name} className="form-field__label">
        {props.label}
      </label>
      <Field as="select" name={props.name} className="form-field__input">
        {optionsList}
      </Field>
      <label />
    </div>
  );
};
