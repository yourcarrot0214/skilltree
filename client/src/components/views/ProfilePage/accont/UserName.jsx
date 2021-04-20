import React, { useState } from "react";
import Button from "./Button.jsx";
import Styled from "styled-components";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../../../_actions/user_action.js";

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
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);
  const [Name, setName] = useState(name);
  const [NewName, setNewName] = useState(name);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onUpdateUserName = (event) => {
    event.preventDefault();
    if (Name === NewName) {
      setModalOpen(!ModalOpen);
    }
    const requestBody = { newName: NewName };
    dispatch(updateUserName(requestBody));
    setName(NewName);
    setModalOpen(!ModalOpen);
  };

  const onChangeValue = (event) => {
    setNewName(event.currentTarget.value);
  };
  return (
    <UserNameStyled>
      <div>
        <span>사용자명</span>
        <p>{Name}</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
      <Modal
        openModal={ModalOpen}
        onClickFunction={onClickFunction}
        header='사용자명 변경하기'
      >
        <Form submit={onUpdateUserName}>
          <label>사용자명</label>
          <input
            type='text'
            value={NewName}
            onChange={onChangeValue}
            autoFocus
          />
          <button type='submit' onClick={onUpdateUserName}>
            변경하기
          </button>
        </Form>
      </Modal>
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
