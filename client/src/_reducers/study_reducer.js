import {
  STUDY_GET_LIST,
  STUDY_CREATE,
  STUDY_UPDATE,
} from "../_actions/study_types.js";
import applyToStudy from "./study_sub_reducer.js";

export default function study(state = [], action) {
  switch (action.type) {
    case STUDY_GET_LIST:
      return action.payload;
    case STUDY_CREATE:
      return [...state, action.payload];
    case STUDY_UPDATE:
      return state.map((study) => applyToStudy(study, action));
    default:
      return state;
  }
}
