import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "../styles/styled.js";

const Button = ({ buttonName, onClickFunction }) => {
  return <ButtonStyled onClick={onClickFunction}>{buttonName}</ButtonStyled>;
};

Button.propTypes = {
  buttonName: PropTypes.string,
  onClickFunction: PropTypes.func,
};

export default Button;
