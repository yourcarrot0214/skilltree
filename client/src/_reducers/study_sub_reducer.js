import {
  STUDY_UPDATE,
  STUDY_APPLY,
  STUDY_APPLY_CANCEL,
} from "../_actions/study_types.js";

export default function studySetting(state = {}, action) {
  switch (action.type) {
    case STUDY_UPDATE:
      return state._id === action.payload.studyInfo._id
        ? action.payload.studyInfo
        : state;
    case STUDY_APPLY:
      return state._id === action.payload.studyInfo._id
        ? action.payload.studyInfo
        : state;
    case STUDY_APPLY_CANCEL:
      return state._id === action.payload.studyInfo._id
        ? action.payload.studyInfo
        : state;
    default:
      return state;
  }
}
