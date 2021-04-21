import axios from "axios";
import {
  SKILL_GET_LIST,
  SKILL_SELECTED,
  SKILLS_TECHNITIAN_ADD,
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

export function addTechnitian(requestBody) {
  const request = axios
    .post("/api/skills/update/technitianUsers", requestBody)
    .then((response) => response.data);
  return {
    type: SKILLS_TECHNITIAN_ADD,
    payload: request,
  };
}
