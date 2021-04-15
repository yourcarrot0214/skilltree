import React from "react";

const Button = ({ buttonName, onClickFunction }) => {
  return <button onClick={onClickFunction}>{buttonName}</button>;
};

export default Button;
