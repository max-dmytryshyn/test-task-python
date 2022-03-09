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
          if (typeof props.actionsIfFormLoadingFails !== "undefined") {
            props.actionsIfFormLoadingFails.forEach((action) => {
              action();
            });
          }
          if (error.response) {
            window.alert(
              "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText
            );
          } else if (error.request) {
            window.alert("ERROR\nCan't reach the server");
          } else {
            window.alert("ERROR\nUnknown error happened");
          }
        });
    }
    fetchData();
  }, [props.actionsIfFormLoadingFails]);

  return (
    <Formik
      initialValues={{
        username: typeof props.username !== "undefined" ? props.username : "",
        group: typeof props.group !== "undefined" ? props.group : "",
      }}
      validate={(values) => {
        let errors = {};
        if (values.username === "") {
          errors.username = "Field required";
        } else if (values.username.length > 30) {
          errors.username = "Username is too long";
        } else if (!/^([a-z0-9]+_)*[a-z0-9]+$/.test(values.username)) {
          errors.username = "Ivalid username";
        }
        return errors;
      }}
      onSubmit={(values) => {
        if (props.username !== values.username || props.group !== values.group) {
          let group;
          if (values.group === "") {
            group = groups[0];
          } else {
            group = groups.find((group) => {
              return group.name === values.group;
            });
          }
          props.operateUserFormData(values.username, group);
        }
        if (typeof props.additionalOnSubmitActions !== "undefined") {
          props.additionalOnSubmitActions.forEach((action) => {
            action();
          });
        }
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
