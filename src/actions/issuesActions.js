import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";
/*
 * Actions
 */

export const REQUEST_ISSUES = "REQUEST_ISSUES";
export const SET_ISSUES_ERROR = "SET_ISSUES_ERROR";
export const RECEIVE_ISSUES = "RECEIVE_ISSUES";

/*
 * Action creators
 */

export function requestIssues(resource) {
  return {
    type: REQUEST_ISSUES,
    payload: resource
  };
}

export function setIssuesError(error) {
  return {
    type: SET_ISSUES_ERROR,
    payload: error
  };
}

export function receiveIssues(data, byWhat) {
  return {
    type: RECEIVE_ISSUES,
    payload: {
      data: data,
      resource: byWhat
    }
  };
}

/*
 * API calls
 */

/**
 * Send an issue to the API
 * @param issue JSON representation of the issue {hub: hubId, issue: string value}
 */
export function sendIssue(issue, issueId = null) {
  return function(dispatch, getState) {
    dispatch(requestIssues(true));
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .post(issueId ? "issues/" + issueId : "issues/", issue, {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                dispatch(requestIssues(false));
                dispatch(getIssues("hub", result.data.result.hub));
              },
              error => dispatch(setIssuesError(error))
            );
        },
        error => dispatch(setIssuesError(error))
      );
  };
}

export function getIssues(byWhat, id) {
  return function(dispatch, getState) {
    dispatch(requestIssues(byWhat));
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .get("issues?" + byWhat + "=" + id, {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                if (id) {
                  dispatch(receiveIssues(result.data.result, id));
                } else {
                  dispatch(receiveIssues(result.data.result, byWhat));
                }
              },
              error => {
                dispatch(setIssuesError({ error: error, resource: byWhat }));
              }
            );
        },
        error => dispatch(setIssuesError({ error: error, resource: byWhat }))
      );
  };
}
