import axios from "axios";
import {
  SKILL_GET_LIST,
  SKILL_SELECTED,
  SKILLS_SELECTED_RESET,
  SKILLS_TECHNITIAN_ADD,
  SKILLS_LEARNING_ADD,
  SKILLS_TECHNITIAN_DELETE,
  SKILLS_LEARNING_DELETE,
} from "./skill_types.js";

export function getSkillsDB() {
  const request = axios
    .get("/api/skills/list")
    .then((response) => response.data.docs)
    .then((docs) => docs.map((skill) => ({ ...skill, selected: false })));
  return {
    type: SKILL_GET_LIST,
    payload: request,
  };
}

export function selectedSkill(id) {
  return {
    type: SKILL_SELECTED,
    id: id,
  };
}

export function selectedReset() {
  return {
    type: SKILLS_SELECTED_RESET,
  };
}

export function addTechnitian(requestBody) {
  const request = axios
    .post("/api/skills/add/technitianUsers", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  return {
    type: SKILLS_TECHNITIAN_ADD,
    payload: request,
  };
}

export function addLearningUser(requestBody) {
  const request = axios
    .post("/api/skills/add/learningUsers", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return {
    type: SKILLS_LEARNING_ADD,
    payload: request,
  };
}

export function deleteTechnitian(requestBody) {
  const request = axios
    .post("/api/skills/delete/technitianUsers", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return {
    type: SKILLS_TECHNITIAN_DELETE,
    payload: request,
  };
}

export function deleteLearningUser(requestBody) {
  const request = axios
    .post("/api/skills/delete/learningUsers", requestBody)
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
  return {
    type: SKILLS_LEARNING_DELETE,
    payload: request,
  };
}
