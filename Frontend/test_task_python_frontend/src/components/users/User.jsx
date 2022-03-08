import "./User.css";
import { UserFormModal } from "./UserFormModal";

export const User = (props) => {
  return (
    <div className="user-container">
      <p className="user-container__parameter">{props.user.username}</p>
      <p className="user-container__parameter">{props.user.creation_date}</p>
      <p className="user-container__parameter">{props.user.group_name}</p>
      <UserFormModal
        trigger={<button className="user-container__edit-button">Edit</button>}
        defaultUsername={props.user.username}
        defaultGroup={props.user.group_name}
      />
      <button className="user-container__delete-button">Delete</button>
    </div>
  );
};
