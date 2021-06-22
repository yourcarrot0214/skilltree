import React from "react";

const Button = ({ onClickFunction, accept }) => {
  return (
    <>
      <button onClick={onClickFunction}>{accept ? "수락" : "거절"}</button>
    </>
  );
};

export default Button;
