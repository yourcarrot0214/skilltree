import {
  STUDY_GET_LIST,
  STUDY_CREATE,
  STUDY_UPDATE,
  STUDY_DELETE,
  STUDY_APPLY,
  STUDY_APPLY_CANCEL,
  STUDY_APPLY_ACCEPT,
  STUDY_APPLY_REJECT,
  STUDY_MEMBER_LEAVE,
  STUDY_MEMBER_EXPULSION,
} from "../_actions/study_types.js";
import studySetting from "./study_sub_reducer.js";

export default function study(state = [], action) {
  switch (action.type) {
    case STUDY_GET_LIST:
      return action.payload;
    case STUDY_CREATE:
      return [...state, action.payload.responseData];
    case STUDY_UPDATE:
      return state.map((study) => studySetting(study, action));
    case STUDY_DELETE:
      return state.filter((study) => study._id !== action.payload.id);
    case STUDY_APPLY:
      return state.map((study) => studySetting(study, action));
    case STUDY_APPLY_CANCEL:
      return state.map((study) => studySetting(study, action));
    case STUDY_APPLY_ACCEPT:
      return state.map((study) => studySetting(study, action));
    case STUDY_APPLY_REJECT:
      return state.map((study) => studySetting(study, action));
    case STUDY_MEMBER_LEAVE:
      return state.map((study) => studySetting(study, action));
    case STUDY_MEMBER_EXPULSION:
      return state.map((study) => studySetting(study, action));
    default:
      return state;
  }
}
