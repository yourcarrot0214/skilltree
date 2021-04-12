import axios from "axios";
import { SKILL_GET_LIST, SKILL_SELECTED } from "./skill_types.js";

export function getSkillsDB() {
  console.log("get skills DB action");
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
