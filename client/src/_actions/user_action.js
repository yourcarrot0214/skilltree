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
  PROJECT_APPLY_ADD,
  PROJECT_APPLY_REMOVE,
  STUDY_APPLY_ADD,
  STUDY_APPLY_REMOVE,
  PROJECT_MEMBER_ADD,
  PROJECT_MEMBER_REMOVE,
  STUDY_MEMBER_ADD,
  STUDY_MEMBER_REMOVE,
} from "./types.js";

export async function loginUser(loginData) {
  const request = await axios
    .post("/api/user/login", loginData)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export async function logoutUser() {
  const request = await axios
    .get("/api/user/logout")
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: LOGOUT_USER,
    payload: request,
  };
}

export async function registerUser(signupData) {
  const request = await axios
    .post("/api/user/signup", signupData)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export async function auth() {
  const request = await axios
    .get("/api/user/auth")
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export async function updateUserName(newName) {
  const request = await axios
    .patch("/api/user/name", newName)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: UPDATE_NAME,
    payload: request,
  };
}

export async function addUserTech(newTech) {
  const request = await axios
    .post("/api/user/tech", newTech)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: ADD_TECH,
    payload: request,
  };
}

export async function deleteUserTech(techId) {
  const request = await axios
    .delete(`/api/user/tech/${techId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: DELETE_TECH,
    payload: request,
  };
}

export async function addUserLearn(newTech) {
  const request = await axios
    .post("/api/user/learn", newTech)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: ADD_LEARN,
    payload: request,
  };
}

export async function deleteUserLearn(techId) {
  const request = await axios
    .delete(`/api/user/learn/${techId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: DELETE_LEARN,
    payload: request,
  };
}

export async function saveApplyProject(classId) {
  const request = await axios
    .post(`/api/user/project/apply/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY_ADD,
    payload: request,
  };
}

export async function removeApplyProject(classId) {
  const request = await axios
    .delete(`/api/user/project/apply/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY_REMOVE,
    payload: request,
  };
}

export async function saveApplyStudy(classId) {
  const request = await axios
    .post(`/api/user/study/apply/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_ADD,
    payload: request,
  };
}

export async function removeApplyStudy(classId) {
  const request = await axios
    .delete(`/api/user/study/apply/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_REMOVE,
    payload: request,
  };
}

export async function saveProjectMember(requestBody) {
  const request = await axios
    .patch("/api/user/project/member", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_MEMBER_ADD,
    payload: request,
  };
}

export async function removeProjectMember(classId) {
  const request = await axios
    .delete(`/api/user/project/member/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_MEMBER_REMOVE,
    payload: request,
  };
}

export async function saveStudyMember(requestBody) {
  const request = await axios
    .patch("/api/user/study/member", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_MEMBER_ADD,
    payload: request,
  };
}

export async function removeStudyMember(classId) {
  const request = await axios
    .delete(`/api/user/study/member/${classId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_MEMBER_REMOVE,
    payload: request,
  };
}
