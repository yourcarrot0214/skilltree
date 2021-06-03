import { PROJECT_GET_LIST, PROJECT_CREATE } from "../_actions/project_types.js";

export default function project(state = [], action) {
  switch (action.type) {
    case PROJECT_GET_LIST:
      return action.payload;
    case PROJECT_CREATE:
      return [...state, action.payload.responseData];
    default:
      return state;
  }
}
