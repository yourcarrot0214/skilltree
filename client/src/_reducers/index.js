import { combineReducers } from "redux";
import user from "./user_reducer";
import skills from "./skills_reducer";

const rootReducer = combineReducers({
  user,
  skills,
});

export default rootReducer;

/*
  Store 구조
  user: user 정보를 담은 객체
  unSelectedSkills: DB에 등록되어 있는 skill 목록.
  selectedSkills: 유저가 선택한 skill 목록.
*/
