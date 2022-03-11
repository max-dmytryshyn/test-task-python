import "./DeleteUserModal.css";
import Popup from "reactjs-popup";

export const DeleteUserModal = (props) => {
  return (
    <Popup trigger={props.trigger} modal>
      {(close) => (
        <div className="delete-user-window">
          <button className="delete-user-window__close-button" onClick={close}>
            &times;
          </button>
          <p className="delete-user-window__text">Delete {props.username}'s profile?</p>
          <button
            onClick={() => {
              props.onDelete();
              close();
            }}
            className="delete-user-window__confirm-button"
          >
            Confirm
          </button>
        </div>
      )}
    </Popup>
  );
};
