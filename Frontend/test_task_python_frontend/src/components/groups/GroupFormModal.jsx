import Popup from "reactjs-popup";
import { GroupForm } from "./GroupForm";
import "./GroupFormModal.css";

export const GroupFormModal = (props) => {
  return (
    <Popup trigger={props.trigger} modal>
      {(close) => (
        <div className="group-form-window">
          <button className="group-form-window__close-button" onClick={close}>
            &times;
          </button>
          <GroupForm
            operateGroupFormData={props.operateGroupFormData}
            additionalOnSubmitActions={[close]}
            name={props.defaultName}
            description={props.defaultDescription}
          />
        </div>
      )}
    </Popup>
  );
};
