import React, { useState } from "react";
import ListComponent from "../ListComponent/ListComponent";
import "../../index.scss";

const ControllComponent = () => {
  const [sortType, setSortType] = useState(true);
  return (
    <>
      {" "}
      <button className="btn" onClick={() => setSortType(!sortType)}>
        Change Layout type
      </button>
      <ListComponent state={sortType} />
    </>
  );
};

export default ControllComponent;
