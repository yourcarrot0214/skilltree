import React, { useState } from "react";
import Button from "./Button.jsx";
import Styled from "styled-components";
import ModalUserName from "./ModalUserName.jsx";

const UserNameStyled = Styled.div`
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

const UserName = ({ name }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const onClickFunction = () => {
    console.log("Change Name Function.");
    setModalOpen(!ModalOpen);
  };
  return (
    <UserNameStyled>
      <div>
        <span>사용자명</span>
        <p>{name}</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
      <ModalUserName
        openModal={ModalOpen}
        onClickFunction={onClickFunction}
        header='Modal Header'
      >
        <div>Modal Children</div>
      </ModalUserName>
    </UserNameStyled>
  );
};

export default UserName;
