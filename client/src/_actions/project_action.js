import axios from "axios";
import {
  PROJECT_GET_LIST,
  PROJECT_CREATE,
  PROJECT_UPDATE,
} from "./project_types.js";

export function getProjectList() {
  const request = axios
    .get("/api/project/get/list")
    .then((response) => response.data.docs)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_GET_LIST,
    payload: request,
  };
}

export function createProject(requestBody) {
  const request = axios
    .post("/api/project/create", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_CREATE,
    payload: request,
  };
}

export function updateProject(requestBody) {
  const request = axios
    .post("/api/project/update", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: PROJECT_UPDATE,
    payload: request,
  };
}
