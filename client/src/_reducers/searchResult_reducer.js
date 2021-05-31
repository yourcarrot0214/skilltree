import { SKILL_SEARCH, SKILL_SEARCH_RESET } from "../_actions/skill_types.js";

export default function searchResult(state = {}, action) {
  switch (action.type) {
    case SKILL_SEARCH:
      return action.result;
    case SKILL_SEARCH_RESET:
      return action.result;
    default:
      return state;
  }
}
