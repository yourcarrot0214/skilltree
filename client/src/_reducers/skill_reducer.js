import { SKILL_SEARCH } from "../_actions/skill_types.js";

// skill search 결과값 중복 체크
const payloadFilter = (state, action) => {
  if (!action.payload.skillSearchSuccess) return state;
  const skillName = action.payload.skill.name;
  if (state.indexOf(skillName) === -1) {
    return [...state, skillName];
  } else {
    return state;
  }
};

export default function skill(state = [], action) {
  switch (action.type) {
    case SKILL_SEARCH:
      return payloadFilter(state, action);
    default:
      return state;
  }
}

/*
  action.payload.skillSearchSuccess : true or false
  action.payload.skill.name
 */
