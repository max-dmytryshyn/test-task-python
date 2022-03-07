import "./Group.css";

export const Group = () => {
  return (
    <div className="group-container">
      <p className="group-container__id">id</p>
      <p className="group-container__name">name</p>
      <p className="group-container__description">This is example group. Nothing important here </p>
      <button className="group-container__edit-button">Edit</button>
      <button className="group-container__delete-button">Delete</button>
    </div>
  );
};
