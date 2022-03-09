import { updateUserById } from "../../services/api";
import "./User.css";
import { UserFormModal } from "./UserFormModal";

export const User = (props) => {
  const submitUserEditing = async (username, group) => {
    await updateUserById(props.user.id, username, group.id)
      .then((response) => {
        props.renderUsers();
      })
      .catch((error) => {
        if (error.response) {
          let errorText =
            "ERROR\nServer responded with HTTP " + error.response.status + " " + error.response.statusText + "\n";
          if (typeof error.response.data["username"] !== "undefined") {
            errorText += "Username: " + error.response.data["username"] + "\n";
          }
          if (typeof error.response.data["group"] !== "undefined") {
            errorText += "Group: " + error.response.data["group"] + "\n";
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
    <div className="user-container">
      <p className="user-container__parameter">{props.user.username}</p>
      <p className="user-container__parameter">{props.user.creation_date}</p>
      <p className="user-container__parameter">{props.user.group_name}</p>
      <UserFormModal
        trigger={<button className="user-container__edit-button">Edit</button>}
        defaultUsername={props.user.username}
        defaultGroup={props.user.group_name}
        operateUserFormData={submitUserEditing}
      />
      <button className="user-container__delete-button">Delete</button>
    </div>
  );
};
