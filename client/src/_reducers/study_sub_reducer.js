import { STUDY_UPDATE, STUDY_APPLY } from "../_actions/study_types.js";

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
    default:
      return state;
  }
}
