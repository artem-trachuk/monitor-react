import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";

/*
 * Actions
 */

export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_PERMISSIONS = "RECEIVE_PERMISSIONS";

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

export function receivePermissions(permissions) {
  return {
    type: RECEIVE_PERMISSIONS,
    payload: permissions
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
        axiosHttpClient
          .post(
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
          .then(result => {
            dispatch(getPermissions(company));
          })
      );
  };
}

export function getPermissions(companyId) {
  return dispatch => {
    return firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.get("permissions/?company=" + companyId, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(result => {
        dispatch(receivePermissions(result.data.result));
      });
  };
}
