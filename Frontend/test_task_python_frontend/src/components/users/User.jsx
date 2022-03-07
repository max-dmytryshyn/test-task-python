import "./User.css";

export const User = () => {
  return (
    <div className="user-container">
      <p className="user-container__parameter">username</p>
      <p className="user-container__parameter">04.04.2003</p>
      <p className="user-container__parameter">group</p>
      <button className="user-container__edit-button">Edit</button>
      <button className="user-container__delete-button">Delete</button>
    </div>
  );
};
