import React, { useState } from "react";
import Button from "./Button.jsx";
import { UserNameStyled, Form } from "../styles/styled.js";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../../../_actions/user_action.js";

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
