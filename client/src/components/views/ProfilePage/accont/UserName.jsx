import React, { useState } from "react";
import Button from "./Button.jsx";
import { UserNameStyled, Form } from "../styles/styled.js";
import Modal from "./Modal.jsx";
import { useDispatch } from "react-redux";
import { updateUserName } from "../../../../_actions/user_action.js";

const UserName = ({ name }) => {
  const dispatch = useDispatch();
  const [ModalOpen, setModalOpen] = useState(false);

  const [currentName, setCurrentName] = useState(name);
  const [updatedName, setUpdatedName] = useState(name);

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onUpdateUserName = (event) => {
    event.preventDefault();
    if (currentName === updatedName) {
      setModalOpen(!ModalOpen);
    }
    const requestBody = { newName: updatedName };
    dispatch(updateUserName(requestBody));
    setCurrentName(updatedName);
    setModalOpen(!ModalOpen);
  };

  const onChangeValue = (event) => {
    setUpdatedName(event.currentTarget.value);
  };
  return (
    <UserNameStyled>
      <div>
        <span>사용자명</span>
        <p>{name}</p>
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
            value={updatedName}
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
