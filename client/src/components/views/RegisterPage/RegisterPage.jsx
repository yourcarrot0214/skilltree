import React, { useState } from "react";
import {
  SubmitContainer,
  SubmitWrapper,
  SubmitImage,
  SubmitForm,
} from "./styles/styled.js";
import { registerUser } from "../../../_actions/user_action.js";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onSignUpSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) return alert("Password Don't Match.");

    let requestBody = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(requestBody)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        console.log("Sign Up Filed :: ", response.payload.err);
        if (response.payload.err.keyPattern.email === 1) {
          alert("이미 가입된 이메일 주소 입니다.");
        } else {
          alert(response.payload.err.message);
        }
      }
    });
  };

  const onChangeValue = (event) => {
    const value = event.currentTarget.name;
    if (value === "email") setEmail(event.currentTarget.value);
    else if (value === "password") setPassword(event.currentTarget.value);
    else if (value === "name") setName(event.currentTarget.value);
    else if (value === "confirm-password")
      setConfirmPassword(event.currentTarget.value);
  };

  return (
    <SubmitContainer className='SubmitContainer'>
      <SubmitWrapper className='SubmitWrapper'>
        <SubmitImage className='SubmitImage' />
        <SubmitForm className='SubmitForm' onSubmit={onSignUpSubmit}>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={Name}
            onChange={onChangeValue}
            required
          />
          <label>Email</label>
          <input
            type='email'
            name='email'
            value={Email}
            onChange={onChangeValue}
            required
          />
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={Password}
            onChange={onChangeValue}
            required
          />
          <label>Password Check</label>
          <input
            type='password'
            name='confirm-password'
            value={ConfirmPassword}
            onChange={onChangeValue}
            required
          />
          <button type='submit'>SIGN UP</button>
        </SubmitForm>
      </SubmitWrapper>
    </SubmitContainer>
  );
}

export default withRouter(RegisterPage);

/*
  회원가입 성공시 ProfilePage로 이동
  기술 스택 등록 설명 및 유도
  
*/
