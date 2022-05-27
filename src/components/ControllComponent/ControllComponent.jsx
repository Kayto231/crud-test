import React, { useState } from "react";
import ListComponent from "../ListComponent/ListComponent";
import "../../index.scss";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";

const ControllComponent = () => {
  const [sortType, setSortType] = useState(false);
  const { isloading, error } = useSelector((state) => state.api);
  console.log(isloading);
  return (
    <>
      {" "}
      <button className="btn" onClick={() => setSortType(!sortType)}>
        Change Layout type
      </button>
      {!isloading ? <ListComponent state={sortType} /> : <Loader />}
      {error && (
        <div className="d-flex justify-center align-center">
          Some error occured while fetching data
        </div>
      )}
    </>
  );
};

export default ControllComponent;
