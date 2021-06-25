import axios from "axios";
import {
  STUDY_GET_LIST,
  STUDY_CREATE,
  STUDY_UPDATE,
  STUDY_DELETE,
  STUDY_APPLY,
  STUDY_APPLY_CANCEL,
  STUDY_APPLY_ACCEPT,
  STUDY_APPLY_REJECT,
  STUDY_MEMBER_LEAVE,
} from "./study_types.js";

export async function getStudyList() {
  const request = await axios
    .get("/api/study/get/list")
    .then((response) => response.data.docs)
    .catch((err) => console.log(err));
  return {
    type: STUDY_GET_LIST,
    payload: request,
  };
}

export async function createStudy(requestBody) {
  const request = await axios
    .post("/api/study/create", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_CREATE,
    payload: request,
  };
}

export async function updateStudy(requestBody) {
  const request = await axios
    .post("/api/study/update", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_UPDATE,
    payload: request,
  };
}

export async function deleteStudy(requestBody) {
  const request = await axios
    .post("/api/study/delete", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_DELETE,
    payload: request,
  };
}

export async function applyStudy(requestBody) {
  const request = await axios
    .post("/api/study/apply", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY,
    payload: request,
  };
}

export async function cancelStudyApply(requestBody) {
  const request = await axios
    .post("/api/study/apply/cancel", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_CANCEL,
    payload: request,
  };
}

export async function acceptStudyApply(requestBody) {
  const request = await axios
    .post("/api/study/apply/accept", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_ACCEPT,
    payload: request,
  };
}

export async function rejectStudyApply(requestBody) {
  const request = await axios
    .post("/api/study/apply/reject", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_REJECT,
    payload: request,
  };
}

export async function leaveToStudy(requestBody) {
  const request = await axios
    .post("/api/study/member/leave", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  return {
    type: STUDY_MEMBER_LEAVE,
    payload: request,
  };
}
