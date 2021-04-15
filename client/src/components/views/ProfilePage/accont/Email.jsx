import React from "react";
import Styled from "styled-components";

const EmailStyled = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
    padding: 6px 6px;
    margin: 6px 0;
`;

const Email = ({ email }) => {
  return (
    <EmailStyled>
      <div>
        <h3>계정 이메일</h3>
        <p>{email}</p>
      </div>
    </EmailStyled>
  );
};

export default Email;
