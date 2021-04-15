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
`;

const Password = () => {
  const onClickFunction = () => {
    console.log("Password Change Function.");
  };
  return (
    <PasswordStyled>
      <div>
        <h3>비밀번호 관리</h3>
        <p>비밀번호를 변경할 수 있습니다.</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
    </PasswordStyled>
  );
};

export default Password;
