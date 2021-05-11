import React, { useState } from "react";
import { PasswordStyled, Form } from "../styles/styled.js";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import axios from "axios";

const Password = () => {
  const [ModalOpen, setModalOpen] = useState(false);
  const [CurrentPassword, setCurrentPassword] = useState("");
  const [NewPassword, setNewPassword] = useState("");
  const [CheckNewPassword, setCheckNewPassword] = useState("");

  const onClickFunction = () => {
    setModalOpen(!ModalOpen);
  };

  const onChangeValue = (e) => {
    const value = e.currentTarget.name;
    if (value === "password") {
      setCurrentPassword(e.currentTarget.value);
    } else if (value === "new-password") {
      setNewPassword(e.currentTarget.value);
    } else if (value === "check-new-password") {
      setCheckNewPassword(e.currentTarget.value);
    }
  };

  const onUpdatePassword = (event) => {
    event.preventDefault();
    if (CurrentPassword === "" || NewPassword === "" || CheckNewPassword === "")
      return;

    if (CurrentPassword === NewPassword) {
      return alert("기존 비밀번호와 동일한 비밀번호 입니다.");
    } else if (NewPassword !== CheckNewPassword) {
      return alert("변경할 비밀번호가 일치하지 않습니다.");
    }

    const requestBody = {
      currentPassword: CurrentPassword,
      newPassword: NewPassword,
    };

    console.log("update password request");
    axios.post("/api/users/update/password", requestBody).then((response) => {
      if (response.data.passwordUpdate) {
        setCurrentPassword("");
        setNewPassword("");
        setCheckNewPassword("");
        setModalOpen(!ModalOpen);
        alert("비밀번호가 변경되었습니다.");
      } else {
        alert(response.data.message);
        setCurrentPassword("");
        setNewPassword("");
        setCheckNewPassword("");
      }
    });
  };

  return (
    <PasswordStyled>
      <div>
        <span>비밀번호 관리</span>
        <p>비밀번호를 변경할 수 있습니다.</p>
      </div>
      <Button buttonName='수정' onClickFunction={onClickFunction} />
      <Modal
        openModal={ModalOpen}
        onClickFunction={onClickFunction}
        header='비밀번호 변경하기'
      >
        <Form submit={onUpdatePassword}>
          <label>현재 비밀번호</label>
          <input
            type='password'
            name='password'
            value={CurrentPassword}
            onChange={onChangeValue}
            autoFocus
            required
          />
          <label>변경할 비밀번호</label>
          <input
            type='password'
            name='new-password'
            value={NewPassword}
            onChange={onChangeValue}
            required
          />
          <label>비밀번호 확인</label>
          <input
            type='password'
            name='check-new-password'
            value={CheckNewPassword}
            onChange={onChangeValue}
            required
          />
          <button type='submit' onClick={onUpdatePassword}>
            변경하기
          </button>
        </Form>
      </Modal>
    </PasswordStyled>
  );
};

export default Password;

/*
  update password 기능구현
    - axios.post('/api/users/update/password', passwordInfo)
    - passwordInfo = {currentPassword: CurrentPassword, newPassword: NewPassword}
    - submit 검증
      > if( currentPassword === NewPassword)
      > if( NewPassword !== CheckNewPassowrd )
  
    - 
*/
