import { STUDY_UPDATE } from "../_actions/study_types.js";

export default function applyToStudy(state = {}, action) {
  switch (action.type) {
    case STUDY_UPDATE:
      return state._id === action.payload.studyInfo._id
        ? action.payload.studyInfo
        : state;
    default:
      return state;
  }
}
