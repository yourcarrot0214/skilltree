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

const Form = Styled.form`
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 4px;
    color: #adb5bd;
  }
  input {
    background-color : #212529;
    border: 1px solid black;
    border-radius: 6px;
    outline: none;
    padding: 6px 6px;
    color: white;
    margin-bottom: 2rem;
  }
  button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
    min-width: 60px;
    margin: 0 auto;
    font-weight: bold;
    border: none;
  }
`;

const UserName = ({ name }) => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [Name, setName] = useState(name);
  const onClickFunction = () => {
    console.log("Change Name Function.");
    setModalOpen(!ModalOpen);
  };

  const onChangeUserName = (event) => {
    event.preventDefault();
    console.log("Change Name Submit");
  };

  const onChangeValue = (event) => {
    setName(event.currentTarget.value);
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
        <Form submit={onChangeUserName}>
          <label>사용자명</label>
          <input type='text' value={Name} onChange={onChangeValue} autoFocus />
          <button type='submit' onClick={onChangeUserName}>
            변경하기
          </button>
        </Form>
      </ModalUserName>
    </UserNameStyled>
  );
};

export default UserName;

/*
  onChangeUserName function
    - username update in MongoDB
    - axios post request
    - back-end response
*/
