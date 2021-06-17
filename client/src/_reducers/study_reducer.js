import {
  STUDY_GET_LIST,
  STUDY_CREATE,
  STUDY_UPDATE,
  STUDY_APPLY,
  STUDY_APPLY_CANCEL,
} from "../_actions/study_types.js";
import studySetting from "./study_sub_reducer.js";

export default function study(state = [], action) {
  switch (action.type) {
    case STUDY_GET_LIST:
      return action.payload;
    case STUDY_CREATE:
      return [...state, action.payload];
    case STUDY_UPDATE:
      return state.map((study) => studySetting(study, action));
    case STUDY_APPLY:
      return state.map((study) => studySetting(study, action));
    case STUDY_APPLY_CANCEL:
      return state.map((study) => studySetting(study, action));
    default:
      return state;
  }
}
