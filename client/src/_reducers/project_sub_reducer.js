import { PROJECT_UPDATE } from "../_actions/project_types.js";

export default function applyToProject(state = {}, action) {
  switch (action.type) {
    case PROJECT_UPDATE:
      return state._id === action.payload.projectInfo._id
        ? action.payload.projectInfo
        : state;
    default:
      return state;
  }
}
