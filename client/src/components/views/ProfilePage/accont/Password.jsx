import React from "react";
import Styled from "styled-components";
import Button from "./Button.jsx";

const PasswordStyled = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid black;
    padding: 6px 6px;
    margin: 6px 0;
    span {
      font-weight: bold;
      font-size: 12px;
      margin-bottom: 4px;
    }
    p {
      margin-top: 0;
      margin-bottom: 6px;
    }
`;

const Password = () => {
  const onClickFunction = () => {
    console.log("Password Change Function.");
  };
  return (
    <PasswordStyled>
      <div>
        <span>비밀번호 관리</span>
        <p>비밀번호를 변경할 수 있습니다.</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
    </PasswordStyled>
  );
};

export default Password;
