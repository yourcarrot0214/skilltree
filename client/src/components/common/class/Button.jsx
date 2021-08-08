import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../styles/styled.js";

const Button = ({ onClickFunction, admission, name, userId }) => {
  const [id] = useState(userId);
  const dispatchFunction = () => onClickFunction(id);
  return (
    <>
      <StyledButton onClick={dispatchFunction} admission={admission}>
        {name}
      </StyledButton>
    </>
  );
};

export default Button;

Button.propTypes = {
  onClickFunction: PropTypes.func,
  admission: PropTypes.bool,
  name: PropTypes.string,
  userId: PropTypes.string,
};
