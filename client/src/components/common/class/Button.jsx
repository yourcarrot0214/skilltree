import React from "react";
import { StyledButton } from "../styles/styled.js";

const Button = ({ onClickFunction, admission }) => {
  return (
    <>
      <StyledButton onClick={onClickFunction} admission={admission}>
        {admission ? "수락" : "거절"}
      </StyledButton>
    </>
  );
};

export default Button;
