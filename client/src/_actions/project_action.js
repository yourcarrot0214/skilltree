import axios from "axios";
import {
  PROJECT_GET_LIST,
  PROJECT_CREATE,
  PROJECT_UPDATE,
  PROJECT_DELETE,
  PROJECT_APPLY,
  PROJECT_APPLY_CANCEL,
  PROJECT_APPLY_ACCEPT,
  PROJECT_APPLY_REJECT,
  PROJECT_MEMBER_LEAVE,
  PORJECT_MEMBER_EXPULSION,
} from "./project_types.js";

export async function getProjectList() {
  const request = await axios
    .get("/api/project/list")
    .then((response) => response.data.docs)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_GET_LIST,
    payload: request,
  };
}

export async function createProject(requestBody) {
  const request = await axios
    .post("/api/project/create", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_CREATE,
    payload: request,
  };
}

export async function updateProject(requestBody) {
  const request = await axios
    .patch("/api/project/update", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_UPDATE,
    payload: request,
  };
}

export async function deleteProject(requestBody) {
  const request = await axios
    .patch("/api/project/delete", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_DELETE,
    payload: request,
  };
}

export async function applyProject(requestBody) {
  const request = await axios
    .patch("/api/project/apply", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY,
    payload: request,
  };
}

export async function cancelProjectApply(requestBody) {
  const request = await axios
    .patch("/api/project/apply/cancel", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY_CANCEL,
    payload: request,
  };
}

export async function acceptProjectApply(requestBody) {
  const request = await axios
    .patch("/api/project/apply/accept", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY_ACCEPT,
    payload: request,
  };
}

export async function rejectProjectApply(requestBody) {
  const request = await axios
    .patch("/api/project/apply/reject", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_APPLY_REJECT,
    payload: request,
  };
}

export async function leaveToProject(requestBody) {
  const request = await axios
    .patch("/api/project/member/leave", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_MEMBER_LEAVE,
    payload: request,
  };
}

export async function expulsionProjectMember(requestBody) {
  const request = await axios
    .patch("/api/project/member/expulsion", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PORJECT_MEMBER_EXPULSION,
    payload: request,
  };
}
