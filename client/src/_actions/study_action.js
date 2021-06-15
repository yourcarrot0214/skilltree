import axios from "axios";
import { STUDY_GET_LIST, STUDY_CREATE, STUDY_UPDATE } from "./study_types.js";

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
    .catach((err) => console.log(err));
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
