import React from "react";
import Button from "./Button.jsx";
import Styled from "styled-components";

const UserNameStyled = Styled.div`
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

const UserName = ({ name }) => {
  const onClickFunction = () => {
    console.log("Change Name Function.");
  };
  return (
    <UserNameStyled>
      <div>
        <span>사용자명</span>
        <p>{name}</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
    </UserNameStyled>
  );
};

export default UserName;
