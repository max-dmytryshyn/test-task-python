import "./User.css";

export const User = (props) => {
  return (
    <div className="user-container">
      <p className="user-container__parameter">{props.user.username}</p>
      <p className="user-container__parameter">{props.user.creation_date}</p>
      <p className="user-container__parameter">{props.user.group_name}</p>
      <button className="user-container__edit-button">Edit</button>
      <button className="user-container__delete-button">Delete</button>
    </div>
  );
};
