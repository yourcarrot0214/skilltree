import axios from "axios";
import { STUDY_GET_LIST, STUDY_CREATE, STUDY_UPDATE } from "./study_types.js";

export function getStudyList() {
  const request = axios
    .get("/api/study/get/list")
    .then((response) => response.data.docs);
  return {
    type: STUDY_GET_LIST,
    payload: request,
  };
}

export function createStudy(requestBody) {
  const request = axios
    .post("/api/study/create", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return {
    type: STUDY_CREATE,
    payload: request,
  };
}

export function updateStudy(requestBody) {
  const request = axios
    .post("/api/study/update", requestBody)
    .then((response) => response.data);
  return {
    type: STUDY_UPDATE,
    payload: request,
  };
}
