import { updateGroupById } from "../../services/api";
import "./Group.css";
import { GroupFormModal } from "./GroupFormModal";

export const Group = (props) => {
  const submitGroupEditing = async (name, description) => {
    await updateGroupById(props.group.id, name, description)
      .then((response) => {
        props.renderGroups();
      })
      .catch((error) => {
        if (error.response) {
          let errorText =
            "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText + "\n";
          if (typeof error.response.data["name"] !== "undefined") {
            errorText += "Name: " + error.response.data["name"] + "\n";
          }
          if (typeof error.response.data["description"] !== "undefined") {
            errorText += "Description: " + error.response.data["description"] + "\n";
          }
          window.alert(errorText);
        } else if (error.request) {
          window.alert("ERROR\nCan't reach the server");
        } else {
          window.alert("ERROR\nUnknown error happened");
        }
      });
  };

  return (
    <div className="group-container">
      <p className="group-container__id">{props.group.id}</p>
      <p className="group-container__name">{props.group.name}</p>
      <p className="group-container__description">{props.group.description} </p>
      <GroupFormModal
        trigger={<button className="group-container__edit-button">Edit</button>}
        defaultName={props.group.name}
        defaultDescription={props.group.description}
        operateGroupFormData={submitGroupEditing}
      />
      <button className="group-container__delete-button">Delete</button>
    </div>
  );
};
