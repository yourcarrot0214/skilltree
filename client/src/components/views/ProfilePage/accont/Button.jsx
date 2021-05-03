import React from "react";
import { ButtonStyled } from "../styles/styled.js";

const Button = ({ buttonName, onClickFunction }) => {
  return <ButtonStyled onClick={onClickFunction}>{buttonName}</ButtonStyled>;
};

export default Button;
