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
`;

const UserName = ({ name }) => {
  const onClickFunction = () => {
    console.log("Change Name Function.");
  };
  return (
    <UserNameStyled>
      <div>
        <h3>사용자명</h3>
        <p>{name}</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
    </UserNameStyled>
  );
};

export default UserName;
