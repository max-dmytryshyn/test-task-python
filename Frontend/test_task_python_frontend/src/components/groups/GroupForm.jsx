import "./GroupForm.css";
import { Formik, Form } from "formik";
import { TextFormField } from "../form_field/TextFormField";
import { TextAreaFormField } from "../form_field/TextAreaFormField";

export const GroupForm = (props) => {
  return (
    <Formik
      initialValues={{
        name: typeof props.name !== "undefined" ? props.name : "",
        description: typeof props.description !== "undefined" ? props.description : "",
      }}
      validate={(values) => {
        let errors = {};
        if (values.name === "") {
          errors.name = "Field required";
        } else if (values.name.length > 30) {
          errors.name = "Name is too long";
        } else if (!/^([a-z0-9]+_)*[a-z0-9]+$/.test(values.name)) {
          errors.name = "Ivalid name";
        }
        if (values.description === "") {
          errors.description = "Field required";
        } else if (!/^[a-zA-Z0-9 ',.]+$/.test(values.description)) {
          errors.description = "Ivalid symbols";
        }
        return errors;
      }}
      onSubmit={() => {
        props.onGroupFormSubmit();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="user-form">
          <TextFormField name="name" type="text" label="Name"></TextFormField>
          <TextAreaFormField name="description" label="Description"></TextAreaFormField>
          <button type="submit" disabled={isSubmitting} className="user-form__submit-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
