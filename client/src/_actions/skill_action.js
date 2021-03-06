import axios from "axios";
import {
  SKILL_GET_LIST,
  SKILL_SELECTED,
  SKILLS_SELECTED_RESET,
  SKILLS_TECHNITIAN_ADD,
  SKILLS_LEARNING_ADD,
  SKILLS_TECHNITIAN_DELETE,
  SKILLS_LEARNING_DELETE,
  SKILL_SEARCH,
  SKILL_SEARCH_RESET,
  SKILL_SELECTED_ONE,
} from "./skill_types.js";

export async function getSkillsDB() {
  const request = await axios
    .get("/api/skills/list")
    .then((response) => response.data.docs)
    .then((docs) => docs.map((skill) => ({ ...skill, selected: false })))
    .catch((err) => console.log(err));
  return {
    type: SKILL_GET_LIST,
    payload: request,
  };
}

export function selectedSkill(id) {
  console.log("selectedSkill action.");
  return {
    type: SKILL_SELECTED,
    id: id,
  };
}

export function chooseOneSelected(id) {
  return {
    type: SKILL_SELECTED_ONE,
    id: id,
  };
}

export function selectedReset() {
  console.log("selected Reset.");
  return {
    type: SKILLS_SELECTED_RESET,
  };
}

export async function addTechnitian(requestBody) {
  const request = await axios
    .patch("/api/skills/technitianUsers/add", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: SKILLS_TECHNITIAN_ADD,
    payload: request,
  };
}

export async function addLearningUser(requestBody) {
  const request = await axios
    .patch("/api/skills/learningUsers/add", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: SKILLS_LEARNING_ADD,
    payload: request,
  };
}

export async function deleteTechnitian(requestBody) {
  const request = await axios
    .patch("/api/skills/technitianUsers/delete", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: SKILLS_TECHNITIAN_DELETE,
    payload: request,
  };
}

export async function deleteLearningUser(requestBody) {
  const request = await axios
    .patch("/api/skills/learningUsers/delete", requestBody)
    .then((response) => response.data)
    .catch((err) => console.log(err));
  return {
    type: SKILLS_LEARNING_DELETE,
    payload: request,
  };
}

export function searchRequest(skill) {
  return {
    type: SKILL_SEARCH,
    result: skill,
  };
}

export function searchResultReset() {
  return {
    type: SKILL_SEARCH_RESET,
    result: {},
  };
}
