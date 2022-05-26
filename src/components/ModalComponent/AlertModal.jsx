import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFunction } from "../../redux/actions/apiActions";
import { changeAlertModalState } from "../../redux/actions/modalActions";
import "./AlertModal_Style.scss";

const AlertModal = ({ id, name }) => {
  const { isAlertOpened, objectToDelete } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  return (
    <div className="alertModal">
      <span>
        Are you sure that you want to delete the item: {objectToDelete.id}.
        {objectToDelete.name}.
      </span>
      <div className="btns">
        <button
          className="btn"
          onClick={() => dispatch(changeAlertModalState(!isAlertOpened))}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            dispatch(deleteProductFunction({ id: objectToDelete.id }));
            dispatch(changeAlertModalState(!isAlertOpened));
          }}
          className="btn"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
