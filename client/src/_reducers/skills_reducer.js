import {
  SKILL_GET_LIST,
  SKILL_SELECTED,
  SKILLS_TECHNITIAN_ADD,
  SKILLS_TECHNITIAN_DELETE,
  SKILLS_LEARNING_ADD,
  SKILLS_LEARNING_DELETE,
} from "../_actions/skill_types.js";
import skill from "./skill_reducer.js";

export default function skills(state = [], action) {
  switch (action.type) {
    case SKILL_GET_LIST:
      return action.payload;
    case SKILL_SELECTED:
      return state.map((doc) => skill(doc, action));
    case SKILLS_TECHNITIAN_ADD:
      return state.map((doc) => skill(doc, action));
    case SKILLS_TECHNITIAN_DELETE:
      return state.map((doc) => skill(doc, action));
    case SKILLS_LEARNING_ADD:
      return state.map((doc) => skill(doc, action));
    case SKILLS_LEARNING_DELETE:
      return state.map((doc) => skill(doc, action));
    default:
      return state;
  }
}

/*
  DELETE case에 filter를 사용하지 않고 action값으로 덮어쓰는 이유.
    - DB와의 동일한 데이터를 유지하기 위해서.
*/
