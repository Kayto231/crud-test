import React, { useState } from "react";
import "./ProductItem_Style.scss";
import logo from "../../assets/images/dots.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  changeAlertModalState,
  changeEditModalStateAction,
  setEditObjectAction,
  setObjectToDeleteAction,
} from "../../redux/actions/modalActions";

const ProductItem = ({
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
  const { isEditOpened, isAlertOpened } = useSelector((state) => state.modal);
  function editProduct() {
    dispatch(changeEditModalStateAction(!isEditOpened));
    dispatch(
      setEditObjectAction({ id, imageUrl, name, count, size, weight, comments })
    );
  }
  console.log(comments);

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
    <div className="product__wrapper d-column justify-center align-center">
      <div className="title d-flex">
        <span>{name}</span>
        <div className="settings">
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
      <img className="image" src={imageUrl} alt="image" />
      <div className="description d-column justify-center align-center">
        <div className="count d-flex justify-center align-center">
          There are {count} pieces left
        </div>
        <div className="size d-flex justify-center align-center">
          The size is {size.height}x{size.width}
        </div>
        <div className="weight d-flex justify-center align-center">
          Weihgt of product is {weight}
        </div>
        <div className="comments d-flex justify-center align-center">
          Comments {comments.map((comment) => comment?.description)}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
