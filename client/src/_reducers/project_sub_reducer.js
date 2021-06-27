import {
  PROJECT_UPDATE,
  PROJECT_APPLY,
  PROJECT_APPLY_CANCEL,
  PROJECT_APPLY_ACCEPT,
  PROJECT_APPLY_REJECT,
  PROJECT_MEMBER_LEAVE,
  PORJECT_MEMBER_EXPULSION,
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
    case PROJECT_APPLY_ACCEPT:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    case PROJECT_APPLY_REJECT:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    case PROJECT_MEMBER_LEAVE:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    case PORJECT_MEMBER_EXPULSION:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    default:
      return state;
  }
}
