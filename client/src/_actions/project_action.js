import axios from "axios";
import { PROJECT_GET_LIST, PROJECT_CREATE } from "./project_types.js";

export function getProjectList() {
  const request = axios
    .get("/api/project/get/list")
    .then((response) => response.data.docs);
  return {
    type: PROJECT_GET_LIST,
    payload: request,
  };
}

export function createProject(requestBody) {
  const request = axios
    .post("/api/project/create", requestBody)
    .then((response) => response.data);
  return {
    type: PROJECT_CREATE,
    payload: request,
  };
}
