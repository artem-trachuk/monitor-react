import {
  SET_DEFAULT_CENTER,
  SET_ERROR,
  SET_IS_LOGGED,
  SET_USER_COMPANIES,
  SET_USER_ID,
  UPDATE_USER
} from "../actions/userActions";

export default function userReducer(
  state = {
    language: localStorage.getItem("Language") || "en-US",
    user: undefined,
    error: null,
    isLoggedIn: false,
    defaultCenter: null,
    userId: "",
    companies: []
  },
  action
) {
  switch (action.type) {
    case UPDATE_USER:
      state = {
        ...state,
        user: action.payload
      };
      break;
    case SET_ERROR:
      state = {
        ...state,
        error: action.payload
      };
      break;
    case SET_IS_LOGGED:
      state = {
        ...state,
        isLoggedIn: true
      };
      break;
    case "CHANGE_LANGUAGE":
      if (typeof Storage !== "undefined") {
        localStorage.setItem("Language", action.payload);
      }
      state = {
        ...state,
        language: action.payload
      };
      break;
    case SET_DEFAULT_CENTER:
      state = {
        ...state,
        defaultCenter: action.payload
      };
      break;
    case SET_USER_ID:
      state = {
        ...state,
        userId: action.payload
      };
      break;
    case SET_USER_COMPANIES:
      state = {
        ...state,
        companies: action.payload
      };
      break;
    default:
      break;
  }
  return state;
}
