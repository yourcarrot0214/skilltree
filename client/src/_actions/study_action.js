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
  STUDY_MEMBER_EXPULSION,
} from "./study_types.js";

export async function getStudyList() {
  const request = await axios
    .get("/api/study")
    .then((response) => response.data.docs)
    .catch((err) => console.log(err));
  return {
    type: STUDY_GET_LIST,
    payload: request,
  };
}

export async function createStudy(requestBody) {
  const request = await axios
    .post("/api/study", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_CREATE,
    payload: request,
  };
}

export async function updateStudy(studyId, requestBody) {
  const request = await axios
    .patch(`/api/study/${studyId}`, requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_UPDATE,
    payload: request,
  };
}

export async function deleteStudy(studyId) {
  const request = await axios
    .delete(`/api/study/${studyId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_DELETE,
    payload: request,
  };
}

export async function applyStudy(studyId) {
  const request = await axios
    .patch(`/api/study/apply/${studyId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY,
    payload: request,
  };
}

export async function cancelStudyApply(studyId) {
  const request = await axios
    .delete(`/api/study/apply/${studyId}`)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_CANCEL,
    payload: request,
  };
}

export async function acceptStudyApply(requestBody) {
  const request = await axios
    .patch("/api/study/apply/accept", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_ACCEPT,
    payload: request,
  };
}

export async function rejectStudyApply(requestBody) {
  const request = await axios
    .patch("/api/study/apply/reject", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_APPLY_REJECT,
    payload: request,
  };
}

export async function leaveToStudy(requestBody) {
  const request = await axios
    .patch("/api/study/member/leave", requestBody)
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

export async function expulsionStudyMember(requestBody) {
  const request = await axios
    .patch("/api/study/member/expulsion", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: STUDY_MEMBER_EXPULSION,
    payload: request,
  };
}
