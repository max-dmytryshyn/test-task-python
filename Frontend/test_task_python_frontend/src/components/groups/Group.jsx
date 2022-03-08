import "./Group.css";
import { GroupFormModal } from "./GroupFormModal";

export const Group = (props) => {
  return (
    <div className="group-container">
      <p className="group-container__id">{props.group.id}</p>
      <p className="group-container__name">{props.group.name}</p>
      <p className="group-container__description">{props.group.description} </p>
      <GroupFormModal
        trigger={<button className="group-container__edit-button">Edit</button>}
        defaultName={props.group.name}
        defaultDescription={props.group.description}
      />
      <button className="group-container__delete-button">Delete</button>
    </div>
  );
};
