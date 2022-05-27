import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFunction } from "../../redux/actions/apiActions";
import { changeAlertModalState } from "../../redux/actions/modalActions";
import "./AlertModal_Style.scss";

const AlertModal = () => {
  const { isAlertOpened, objectToDelete } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  return (
    <div className="alertModal">
      <span className="text d-flex justify-center align-center">
        Are you sure that you want to delete the item: {objectToDelete.id}.
        {objectToDelete.name}.
      </span>
      <div className="btns d-flex  ">
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
          className="btn delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default AlertModal;
