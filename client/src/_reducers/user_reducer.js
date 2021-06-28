import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_NAME,
  ADD_TECH,
  ADD_LEARN,
  DELETE_TECH,
  DELETE_LEARN,
  PROJECT_APPLY_ADD,
  PROJECT_APPLY_DELETE,
} from "../_actions/types.js";

export default function user(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case LOGOUT_USER:
      return { ...state, logoutSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, signupSuccess: action.payload };
    case AUTH_USER:
      return { ...state, userData: action.payload };
    case UPDATE_NAME:
      return { ...state, userData: action.payload };
    case ADD_TECH:
      return { ...state, userData: action.payload };
    case ADD_LEARN:
      return { ...state, userData: action.payload };
    case DELETE_TECH:
      return { ...state, userData: action.payload };
    case DELETE_LEARN:
      return { ...state, userData: action.payload };
    case PROJECT_APPLY_ADD:
      return {
        ...state,
        userData: {
          ...state.userData,
          project: {
            ...state.userData.project,
            apply: action.payload.apply,
          },
        },
      };
    case PROJECT_APPLY_DELETE:
      return {
        ...state,
        userData: {
          ...state.userData,
          project: {
            ...state.userData.project,
            apply: action.payload.apply,
          },
        },
      };
    default:
      return state;
  }
}
