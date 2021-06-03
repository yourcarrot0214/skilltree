import { STUDY_GET_LIST, STUDY_CREATE } from "../_actions/study_types.js";

export default function studys(state = [], action) {
  switch (action.type) {
    case STUDY_GET_LIST:
      return action.payload;
    case STUDY_CREATE:
      return [...state, action.payload];
    default:
      return state;
  }
}
