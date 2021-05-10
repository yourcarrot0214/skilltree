import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_NAME,
  ADD_TECH,
  DELETE_TECH,
  ADD_LEARN,
  DELETE_LEARN,
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

export function addUserTech(newTech) {
  const request = axios
    .post("/api/users/add/tech", newTech)
    .then((response) => response.data);
  return {
    type: ADD_TECH,
    payload: request,
  };
}

export function deleteUserTech(techId) {
  const request = axios
    .post("/api/users/delete/tech", techId)
    .then((response) => response.data);
  return {
    type: DELETE_TECH,
    payload: request,
  };
}

export function addUserLearn(newTech) {
  const request = axios
    .post("/api/users/add/learn", newTech)
    .then((response) => response.data);
  return {
    type: ADD_LEARN,
    payload: request,
  };
}

export function deleteUserLearn(techId) {
  const request = axios
    .post("/api/users/delete/learn", techId)
    .then((response) => response.data);
  return {
    type: DELETE_LEARN,
    payload: request,
  };
}
