import React from "react";
import Styled from "styled-components";

const ButtonStyled = Styled.button`
  min-width: 60px;
  font-weight: bold;
  
`;

const Button = ({ buttonName, onClickFunction }) => {
  return <ButtonStyled onClick={onClickFunction}>{buttonName}</ButtonStyled>;
};

export default Button;
