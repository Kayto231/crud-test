import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../ProductComponent/ProductItem";
import ListItem from "./ListItem";

import "./ListComponent_Style.scss";
import ModalComponent from "../ModalComponent/ModalComponent";
import { changeModalStateAction } from "../../redux/actions/modalActions";
import EditModal from "../ModalComponent/EditModal";
import AlertModal from "../ModalComponent/AlertModal";
import {
  sortByCountFunction,
  sortByTitleFunction,
} from "../../redux/actions/apiActions";

const ListComponent = ({ state }) => {
  const { products } = useSelector((state) => state.api);
  const { isOpened, isEditOpened, isAlertOpened } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortByTitleFunction(products));
  }, [products]);

  console.log(products);

  return (
    <div className="listcomponent__wrapper">
      <ul className="sortPanel d-flex">
        <li className="li__item">Sort By</li>
        <li
          onClick={() => dispatch(sortByTitleFunction(products))}
          className="li__item"
        >
          Title
        </li>
        <li
          onClick={() => dispatch(sortByCountFunction(products))}
          className="li__item"
        >
          Count
        </li>
      </ul>
      <div
        className={
          state ? "sortswitch__block d-column" : "sortswitch__block d-flex"
        }
      >
        {state
          ? products.map((product) => (
              <ListItem
                key={product.id}
                name={product.name}
                id={product.id}
                imageUrl={product.imageUrl}
                count={product.count}
                size={product.size}
                weight={product.weight}
                comments={product.comments}
              />
            ))
          : products.map((product) => (
              <ProductItem
                key={product.id}
                name={product.name}
                id={product.id}
                imageUrl={product.imageUrl}
                count={product.count}
                size={product.size}
                weight={product.weight}
                comments={product.comments}
              />
            ))}
      </div>
      <button
        onClick={() => dispatch(changeModalStateAction(!isOpened))}
        className="add__btn btn"
      >
        Add
      </button>
      {isOpened && <ModalComponent />}
      {isEditOpened && <EditModal />}
      {isAlertOpened && <AlertModal />}
    </div>
  );
};

export default ListComponent;
