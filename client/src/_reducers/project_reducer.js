import { PROJECT_GET_LIST } from "../_actions/project_types.js";

export default function projects(state = [], action) {
  switch (action.type) {
    case PROJECT_GET_LIST:
      return action.payload;
    default:
      return state;
  }
}
