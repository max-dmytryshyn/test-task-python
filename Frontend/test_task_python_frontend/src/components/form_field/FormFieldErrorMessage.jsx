import "./FormFieldErrorMessage.css";

export const FormFieldErrorMessage = (props) => {
  return (
    <>
      <p className="form-error-message">{props.message}</p>
    </>
  );
};
