import { SKILL_SEARCH } from "../_actions/skill_types.js";

export default function searchResult(state = {}, action) {
  switch (action.type) {
    case SKILL_SEARCH:
      return action.result;
    default:
      return state;
  }
}
