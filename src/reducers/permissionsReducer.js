import {
  RECEIVE_PERMISSIONS,
  RECEIVE_USERS,
  REQUEST_USERS
} from "../actions/permissionsActions";

export function permissionsReducer(
  state = { users: [], permissions: [] },
  action
) {
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
    case RECEIVE_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload
      };
    default:
      return state;
  }
}
