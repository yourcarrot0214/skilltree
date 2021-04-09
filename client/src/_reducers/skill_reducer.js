import { SKILL_GET_LIST } from "../_actions/skill_types.js";

const initialState = {
  unSelectedSkills: [],
  selectedSkills: [],
};

export default function skill(state = initialState, action) {
  switch (action.type) {
    case SKILL_GET_LIST:
      return { ...state, unSelectedSkills: action.payload };
    default:
      return state;
  }
}

/*
  action.payload.skillSearchSuccess : true or false
  action.payload.skill.name

  1. initialState를 만든다.
  {
    unSelectedSkills: [], <= DB에 등록된 skills 정보를 가져온다.
    selctedSkills: [],
  }
 */

// skill search 결과값 중복 체크
// const payloadFilter = (state, action) => {
//   if (!action.payload.skillSearchSuccess) return state;
//   const skillName = action.payload.skill.name;
//   if (state.indexOf(skillName) === -1) {
//     return [...state, skillName];
//   } else {
//     return state;
//   }
// };
