import React, { useState } from "react";
import { StyledButton } from "../styles/styled.js";

const Button = ({ onClickFunction, admission, name, userId }) => {
  const [id, setId] = useState(userId);
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
