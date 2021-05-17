import {
  SKILL_ADD,
  SKILL_SELECTED,
  SKILLS_TECHNITIAN_ADD,
  SKILLS_TECHNITIAN_DELETE,
  SKILLS_LEARNING_ADD,
  SKILLS_LEARNING_DELETE,
  SKILLS_SELECTED_RESET,
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

    case SKILLS_SELECTED_RESET:
      return { ...state, selected: false };

    case SKILLS_TECHNITIAN_ADD:
      return state._id === action.payload._id
        ? {
            ...state,
            technitianUsers: state.technitianUsers.concat(
              action.payload.technitianUsers
            ),
          }
        : state;

    case SKILLS_TECHNITIAN_DELETE:
      return state._id === action.id
        ? { ...state, technitianUsers: action.technitianUsers }
        : state;

    case SKILLS_LEARNING_ADD:
      return state._id === action.id
        ? {
            ...state,
            learningUsers: state.learningUsers.concat(
              action.payload.learningUsers
            ),
          }
        : state;

    case SKILLS_LEARNING_DELETE:
      return state._id === action.id
        ? { ...state, learningUsers: action.learningUsers }
        : state;

    default:
      return state;
  }
}
