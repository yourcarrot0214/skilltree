import {
  SKILL_ADD,
  SKILL_SELECTED,
  SKILLS_TECHNITIAN_ADD,
} from "../_actions/skill_types.js";

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
    case SKILLS_TECHNITIAN_ADD:
      return state._id === action.payload._id
        ? {
            ...state,
            technitianUsers: state.technitianUsers.concat(
              action.payload.technitianUsers
            ),
          }
        : state;
    default:
      return state;
  }
}
