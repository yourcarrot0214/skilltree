import React, { useState } from "react";
import Styled from "styled-components";
import Button from "./Button.jsx";
import Modal from "./Modal.jsx";
import axios from "axios";

const PasswordStyled = Styled.div`
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
    console.log("update password request");
    if (CurrentPassword === NewPassword) {
      return alert("기존 비밀번호와 동일한 비밀번호 입니다.");
    } else if (NewPassword !== CheckNewPassword) {
      return alert("변경할 비밀번호가 일치하지 않습니다.");
    }

    const requestBody = {
      currentPassword: CurrentPassword,
      newPassword: NewPassword,
    };

    axios.post("/api/users/update/password", requestBody).then((response) => {
      console.log(response);
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
