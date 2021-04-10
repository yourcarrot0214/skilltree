import { SKILL_GET_LIST, SKILL_SELECTED } from "../_actions/skill_types.js";
import skill from "./skill_reducer.js";

export default function skills(state = [], action) {
  switch (action.type) {
    case SKILL_GET_LIST:
      return action.payload;
    case SKILL_SELECTED:
      return state.map((doc) => skill(doc, action));
    default:
      return state;
  }
}

/*
  unSelectedSkills reducer
    - skill 객체를 담은 배열.
    - 배열에 변화를 줄 때 사용한다.
  skill reducer
    - skill을 추가, 삭제할 때 쓰는 리듀서.
    - unSelected, selected에서 해당 값에 변화를 줄 때 사용.
*/
