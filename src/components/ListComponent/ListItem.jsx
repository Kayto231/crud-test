import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/dots.svg";
import {
  changeAlertModalState,
  changeEditModalStateAction,
  setEditObjectAction,
  setObjectToDeleteAction,
} from "../../redux/actions/modalActions";

import "./ListItem_Style.scss";

const ListItem = ({
  id,
  imageUrl,
  name,
  count,
  size,
  weight,
  comments = [],
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();

  console.log(comments);
  const { isEditOpened, isAlertOpened } = useSelector((state) => state.modal);
  function editProduct() {
    dispatch(changeEditModalStateAction(!isEditOpened));
    dispatch(
      setEditObjectAction({ id, imageUrl, name, count, size, weight, comments })
    );
  }
  function deleteItem() {
    dispatch(
      setObjectToDeleteAction({
        id,
        imageUrl,
        name,
        count,
        size,
        weight,
        comments,
      })
    );
    dispatch(changeAlertModalState(!isAlertOpened));
  }

  return (
    <div className="listitem__wrapper d-flex">
      <img className="img" src={imageUrl} alt="" />
      <div className="title border d-flex justify-center align-center">
        {id}.{name}
      </div>
      <div className="amount border d-flex justify-center align-center">
        Amount: {count}.
      </div>{" "}
      <div className="size border d-flex justify-center align-center">
        Size: {size.height}x{size.width}
      </div>{" "}
      <div className="weigth border d-flex justify-center align-center">
        Weigth: {weight}{" "}
      </div>
      <div className="comments border d-flex justify-center align-center">
        Comments {comments.map((comment) => comment?.description)}
      </div>
      <div className="settings d-flex justify-center align-center">
        <img
          onClick={() => setIsOpened(!isOpened)}
          className="img"
          src={logo}
          alt="dots"
        />
        <div className={isOpened ? "dropdown d-column" : "dropdown none"}>
          <span onClick={editProduct} className="item">
            Edit
          </span>
          <span onClick={deleteItem} className="item">
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
