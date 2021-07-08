import React from "react";
import { PrintMessageStyled } from "../styles/styled.js";

const PrintMessage = ({ message }) => {
  return <PrintMessageStyled>{message}</PrintMessageStyled>;
};

export default PrintMessage;
