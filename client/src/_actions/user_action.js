import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_NAME,
  UPDATE_TECH,
} from "./types.js";

export function loginUser(loginData) {
  const request = axios
    .post("/api/users/login", loginData)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function logoutUser() {
  const request = axios
    .get("/api/users/logout")
    .then((response) => response.data);
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export function registerUser(signupData) {
  const request = axios
    .post("/api/users/register", signupData)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios
    .get("/api/users/auth")
    .then((response) => response.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function updateUserName(newName) {
  const request = axios
    .post("/api/users/update/name", newName)
    .then((response) => response.data);
  return {
    type: UPDATE_NAME,
    payload: request,
  };
}

export function updateUserTech(newTech) {
  const request = axios
    .post("/api/users/update/tech", newTech)
    .then((response) => response.data);
  return {
    type: UPDATE_TECH,
    payload: request,
  };
}
