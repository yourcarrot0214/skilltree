import axios from "axios";
import { SKILL_SEARCH } from "./skill_types.js";

export function skillSearch(searchSkill) {
  const request = axios
    .post("/api/skills/search", searchSkill)
    .then((response) => response.data);
  return {
    type: SKILL_SEARCH,
    payload: request,
  };
}
