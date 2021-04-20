import React, { useState } from "react";
import styled from "styled-components";
import { loginUser } from "../../../_actions/user_action.js";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SubmitForm = styled.form`
  display: flex;
  flex-direction: column;
`;

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onLoginSubmit = (event) => {
    event.preventDefault();
    let requestBody = { email: Email, password: Password };
    dispatch(loginUser(requestBody)).then((response) => {
      if (response.payload.loginSuccess) {
        console.log(response);
        props.history.push("/");
      } else {
        alert(response.payload.message);
      }
    });
  };

  const onChangeValue = (event) => {
    const value = event.currentTarget.name;
    if (value === "email") setEmail(event.currentTarget.value);
    else if (value === "password") setPassword(event.currentTarget.value);
  };

  return (
    <SubmitContainer>
      <SubmitForm onSubmit={onLoginSubmit}>
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
        <button type='submit'>LOGIN</button>
      </SubmitForm>
    </SubmitContainer>
  );
}

export default withRouter(LoginPage);

/*
  login 성공시
    - 1. LandingPage로 넘어가서 메인 페이지를 보여준다.
*/
