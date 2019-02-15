import { RECEIVE_USERS, REQUEST_USERS } from "../actions/permissionsActions";

export function permissionsReducer(state = { users: [] }, action) {
  switch (action.type) {
    case REQUEST_USERS:
      return {
        ...state
      };
    case RECEIVE_USERS:
      return {
        ...state,
        users: [action.payload]
      };
    default:
      return state;
  }
}
