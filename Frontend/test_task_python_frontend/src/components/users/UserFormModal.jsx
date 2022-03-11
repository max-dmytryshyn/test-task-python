import Popup from "reactjs-popup";
import { UserForm } from "./UserForm";
import "./UserFormModal.css";

export const UserFormModal = (props) => {
  return (
    <Popup trigger={props.trigger} modal>
      {(close) => (
        <div className="user-form-window">
          <button className="user-form-window__close-button" onClick={close}>
            &times;
          </button>
          <UserForm
            operateUserFormData={props.operateUserFormData}
            additionalOnSubmitActions={[close]}
            actionsIfFormLoadingFails={[close]}
            username={props.defaultUsername}
            group={props.defaultGroup}
          />
        </div>
      )}
    </Popup>
  );
};
