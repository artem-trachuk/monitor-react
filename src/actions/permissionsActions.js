import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";

/*
 * Actions
 */

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

/*
 * Action creators
 */

export function requestUser() {
  return {
    type: REQUEST_USERS
  };
}

export function receiveUser(user) {
  return {
    type: RECEIVE_USERS,
    payload: user
  };
}

/*
 * API calls
 */

export function getUser(id) {
  return dispatch => {
    dispatch(requestUser());
    return firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.get("users/" + id, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(
        result => {
          console.log(result);
          if (result.data.ok) {
            dispatch(receiveUser(result.data.result));
          }
        },
        error => {}
      );
  };
}

export function postPermissions(company, user, CRUD) {
  return dispatch => {
    return firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.post(
          "permissions/",
          {
            company: company,
            user: user,
            create: CRUD.create,
            read: CRUD.read,
            update: CRUD.update,
            delete: CRUD.delete
          },
          {
            headers: {
              Authorization: "Bearer " + idToken
            }
          }
        )
      );
  };
}
