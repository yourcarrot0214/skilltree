import { SKILL_ADD, SKILL_SELECTED } from "../_actions/skill_types.js";

export default function skill(state = {}, action) {
  switch (action.type) {
    case SKILL_ADD:
      return {
        name: action.name,
        learningUsers: action.learningUsers,
        technitianUser: action.technitianUser,
        selected: false,
        id: action._id,
      };
    case SKILL_SELECTED:
      return state._id === action.id
        ? { ...state, selected: !state.selected }
        : state;

    default:
      return state;
  }
}
