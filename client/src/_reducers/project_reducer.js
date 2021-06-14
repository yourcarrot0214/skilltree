import {
  PROJECT_GET_LIST,
  PROJECT_CREATE,
  PROJECT_UPDATE,
} from "../_actions/project_types.js";
import applyToProject from "./project_sub_reducer.js";

export default function project(state = [], action) {
  switch (action.type) {
    case PROJECT_GET_LIST:
      return action.payload;
    case PROJECT_CREATE:
      return [...state, action.payload.responseData];
    case PROJECT_UPDATE:
      return state.map((project) => applyToProject(project, action));
    default:
      return state;
  }
}
