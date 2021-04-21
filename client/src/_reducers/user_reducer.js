import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  UPDATE_NAME,
  UPDATE_TECH,
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
    case UPDATE_TECH:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
}
