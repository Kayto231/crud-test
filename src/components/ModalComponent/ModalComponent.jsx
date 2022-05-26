import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductFunction } from "../../redux/actions/apiActions";
import { changeModalStateAction } from "../../redux/actions/modalActions";
import InputComponent from "./InputComponent";
import "./ModalComponent_Style.scss";

const ModalComponent = ({}) => {
  const dispatch = useDispatch();
  const { isOpened } = useSelector((state) => state.modal);
  const { products } = useSelector((state) => state.api);

  const [productName, setProductName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [count, setCount] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (!productName || !imgUrl || !count || !size) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [productName, imgUrl, count, size]);

  return (
    <div className="modal__wrapper d-column justify-center align-center">
      <form className="form">
        <div className="form__name label d-column">
          <InputComponent
            type="text"
            placeholder={"Product name..."}
            LabelName="Product"
            classDOM={"input input__form"}
            state={productName}
            onchange={(e) => setProductName(e)}
          />
        </div>
        <div className="form__count label d-column">
          <InputComponent
            type="text"
            placeholder={"Count..."}
            LabelName="Count"
            classDOM={"input input__form"}
            state={count}
            onchange={(e) => setCount(e)}
          />
        </div>{" "}
        <div className="form__size label d-column">
          <InputComponent
            type="text"
            placeholder={"Size name..."}
            LabelName="Size: 200x200, 100x100"
            classDOM={"input input__form"}
            state={size}
            onchange={(e) => setSize(e)}
          />
        </div>
        <div className="form__url label d-column">
          <InputComponent
            type="text"
            placeholder={"Image Url"}
            LabelName="Image Url"
            classDOM={"input input__form"}
            state={imgUrl}
            onchange={(e) => setImgUrl(e)}
          />
        </div>
        <div className="form__weight label d-column">
          <InputComponent
            type="text"
            placeholder={"Weigth"}
            LabelName="Weigth"
            classDOM={"input input__form"}
            state={weight}
            onchange={(e) => setWeight(e)}
          />
        </div>
      </form>
      <div className="btns d-flex justify-center align-center">
        <button
          onClick={() => dispatch(changeModalStateAction(!isOpened))}
          className="btn"
        >
          Cancel
        </button>
        <button
          onClick={() =>
            dispatch(
              addNewProductFunction(
                { productName, imgUrl, count, size, weight },
                products
              )
            )
          }
          disabled={disabled}
          className="btn "
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ModalComponent;
