import { combineReducers } from "redux";
import user from "./user_reducer";
import skill from "./skill_reducer";

const rootReducer = combineReducers({
  user,
  skill,
});

export default rootReducer;
