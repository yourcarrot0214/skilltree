import {
  PROJECT_UPDATE,
  PROJECT_APPLY,
  PROJECT_APPLY_CANCEL,
} from "../_actions/project_types.js";

export default function projectSetting(state = {}, action) {
  switch (action.type) {
    case PROJECT_UPDATE:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    case PROJECT_APPLY:
      return state._id === action.payload.projectInfo._id
        ? { ...state, volunteer: action.payload.projectInfo.volunteer }
        : state;
    case PROJECT_APPLY_CANCEL:
      return state._id === action.payload.projectInfo._id
        ? { ...state, volunteer: action.payload.projectInfo.volunteer }
        : state;
    default:
      return state;
  }
}
