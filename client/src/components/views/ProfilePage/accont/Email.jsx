import React from "react";
import { EmailStyled } from "../styles/styled.js";

const Email = ({ email }) => {
  return (
    <EmailStyled>
      <div>
        <span>계정 이메일</span>
        <p>{email}</p>
      </div>
    </EmailStyled>
  );
};

export default Email;
