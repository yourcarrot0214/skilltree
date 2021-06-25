import {
  PROJECT_GET_LIST,
  PROJECT_CREATE,
  PROJECT_UPDATE,
  PROJECT_DELETE,
  PROJECT_APPLY,
  PROJECT_APPLY_CANCEL,
  PROJECT_APPLY_ACCEPT,
  PROJECT_APPLY_REJECT,
  PROJECT_MEMBER_LEAVE,
} from "../_actions/project_types.js";
import projectSetting from "./project_sub_reducer.js";

export default function project(state = [], action) {
  switch (action.type) {
    case PROJECT_GET_LIST:
      return action.payload;
    case PROJECT_CREATE:
      return [...state, action.payload.responseData];
    case PROJECT_UPDATE:
      return state.map((project) => projectSetting(project, action));
    case PROJECT_DELETE:
      return state.filter((project) => project._id !== action.payload.id);
    case PROJECT_APPLY:
      return state.map((project) => projectSetting(project, action));
    case PROJECT_APPLY_CANCEL:
      return state.map((project) => projectSetting(project, action));
    case PROJECT_APPLY_ACCEPT:
      return state.map((project) => projectSetting(project, action));
    case PROJECT_APPLY_REJECT:
      return state.map((project) => projectSetting(project, action));
    case PROJECT_MEMBER_LEAVE:
      return state.map((project) => projectSetting(project, action));
    default:
      return state;
  }
}
