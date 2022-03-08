import "./UserForm.css";
import { Formik, Form } from "formik";
import { TextFormField } from "../form_field/TextFormField";
import { SelectFormField } from "../form_field/SelectFormField";
import { useEffect, useState } from "react";
import { getAllGroups } from "../../services/api";

export const UserForm = (props) => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await getAllGroups()
        .then((collected_groups) => {
          setGroups(collected_groups.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Server responded with HTTP " + error.response.status + " " + error.response.statusText);
          } else if (error.request) {
            console.log("Can't reach the server");
          } else {
            console.log("Unknown error happened");
          }
        });
    }
    fetchData();
  }, []);

  return (
    <Formik
      initialValues={{ username: props.username, group: props.group }}
      validate={(values) => {
        let errors = {};
        if (values.username === "") {
          errors.username = "Field required";
        } else if (values.username.length > 30) {
          errors.username = "Username is too long";
        } else if (!/^([a-z]+_)*[a-z]+$/.test(values.username)) {
          errors.username = "Ivalid username";
        }
        return errors;
      }}
      onSubmit={() => {
        props.onUserFormSubmit();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="user-form">
          <TextFormField name="username" type="text" label="Username"></TextFormField>
          <SelectFormField name="group" label="Group" options={groups} />
          <button type="submit" disabled={isSubmitting} className="user-form__submit-button">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
