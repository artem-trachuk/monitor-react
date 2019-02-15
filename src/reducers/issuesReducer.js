import {
  SET_ISSUES_ERROR,
  RECEIVE_ISSUES,
  REQUEST_ISSUES
} from "../actions/issuesActions";

export function issuesReducer(
  state = { isIssuesFetching: {}, issuesError: {} },
  action
) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return {
        ...state,
        isIssuesFetching: { [action.payload]: true }
      };
    case SET_ISSUES_ERROR:
      return {
        ...state,
        isIssuesFetching: { [action.payload.resource]: false },
        issuesError: { [action.payload.resource]: action.payload.error }
      };
    case RECEIVE_ISSUES:
      return {
        ...state,
        isIssuesFetching: { [action.payload.resource]: false },
        [action.payload.resource]: action.payload.data,
        issuesError: { [action.payload.resource]: undefined }
      };
    default:
      return state;
  }
}
