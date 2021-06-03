import axios from "axios";
import { PROJECT_GET_LIST } from "./project_types.js";

export function getProjectList() {
  const request = axios
    .get("/api/project/get/list")
    .then((response) => response.data.docs);
  return {
    type: PROJECT_GET_LIST,
    payload: request,
  };
}
