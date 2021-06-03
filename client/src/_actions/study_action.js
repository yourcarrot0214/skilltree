import axios from "axios";
import { STUDY_GET_LIST } from "./study_types.js";

export function getStudyList() {
  const request = axios
    .get("/api/study/get/list")
    .then((response) => response.data.docs);
  return {
    type: STUDY_GET_LIST,
    payload: request,
  };
}
