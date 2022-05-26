import React from "react";

const InputComponent = ({
  type,
  placeholder,
  classDOM,
  LabelName,
  state,
  onchange,
}) => {
  return (
    <>
      <label>{LabelName}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={classDOM}
        value={state}
        onChange={(e) => onchange(e.target.value)}
      />
    </>
  );
};

export default InputComponent;
