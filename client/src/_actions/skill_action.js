import axios from "axios";
import { SKILL_SEARCH, SKILL_GET_LIST } from "./skill_types.js";

export function skillSearch(searchSkill) {
  const request = axios
    .post("/api/skills/search", searchSkill)
    .then((response) => response.data);
  return {
    type: SKILL_SEARCH,
    payload: request,
  };
}

export function getSkillsDB() {
  console.log("get skills DB action");
  const request = axios
    .get("/api/skills/list")
    .then((response) => response.data.docs);
  return {
    type: SKILL_GET_LIST,
    payload: request,
  };
}
