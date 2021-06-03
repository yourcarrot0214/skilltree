import { STUDY_GET_LIST } from "../_actions/study_types.js";

export default function studys(state = [], action) {
  switch (action.type) {
    case STUDY_GET_LIST:
      return action.payload;
    default:
      return state;
  }
}
