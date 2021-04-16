import React from "react";
import Styled from "styled-components";

const ButtonStyled = Styled.button`
  min-width: 60px;
  font-weight: bold;
  background-color: #495057;
  border: none;
  border-radius: 4px;
  color: white;
`;

const Button = ({ buttonName, onClickFunction }) => {
  return <ButtonStyled onClick={onClickFunction}>{buttonName}</ButtonStyled>;
};

export default Button;
