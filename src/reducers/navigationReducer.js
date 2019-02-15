import { SET_NAVIGATED_LINK } from "../actions/navigationActions";

export function navigationReducer(state = {}, action) {
  switch (action.type) {
    case SET_NAVIGATED_LINK:
      state = {
        ...state,
        currentLink: action.payload
      };
      break;
    default:
      break;
  }
  return state;
}
