import "./DeleteGroupModal.css";
import Popup from "reactjs-popup";

export const DeleteGroupModal = (props) => {
  return (
    <Popup trigger={props.trigger} modal>
      {(close) => (
        <div className="delete-group-window">
          <button className="delete-group-window__close-button" onClick={close}>
            &times;
          </button>
          <p className="delete-group-window__text">Delete "{props.name}" group?</p>
          <button
            onClick={() => {
              props.onDelete();
              close();
            }}
            className="delete-group-window__confirm-button"
          >
            Confirm
          </button>
        </div>
      )}
    </Popup>
  );
};
