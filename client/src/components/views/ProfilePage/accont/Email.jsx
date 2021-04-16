import React from "react";
import Styled from "styled-components";

const EmailStyled = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem 1rem;
  margin: 6px 0;
  span {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  p {
    margin-top: 0;
    margin-bottom: 6px;
  }
`;

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
