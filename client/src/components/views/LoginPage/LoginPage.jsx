import React, { useState } from "react";
import {
  LoginContainer,
  LoginWrapper,
  LoginImage,
  LoginForm,
} from "./styles/styled.js";
import { loginUser } from "../../../_actions/user_action.js";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onLoginSubmit = (event) => {
    event.preventDefault();
    let requestBody = { email: Email, password: Password };
    dispatch(loginUser(requestBody)).then((response) => {
      if (response.payload.success) {
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
    <LoginContainer>
      <LoginWrapper>
        <LoginImage />
        <LoginForm onSubmit={onLoginSubmit}>
          <h2>Welcome to SKILL TREE</h2>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={Email}
            onChange={onChangeValue}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={Password}
            onChange={onChangeValue}
            required
          />
          <button type="submit">LOGIN</button>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
}

export default withRouter(LoginPage);
