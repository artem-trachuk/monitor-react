import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";

/*
 * actions
 */

export const UPDATE_USER = "UPDATE_USER";
export const SET_ERROR = "SET_ERROR";
export const SET_IS_LOGGED = "SET_IS_LOGGED";
export const SET_DEFAULT_CENTER = "SET_DEFAULT_CENTER";
export const SET_USER_ID = "SET_USER_ID";

/*
 * action creators
 */

export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error
  };
}

export function changeLanguage(language) {
  return {
    type: "CHANGE_LANGUAGE",
    payload: language
  };
}
export function updateUser(user) {
  return {
    type: UPDATE_USER,
    payload: user
  };
}

export function setIsLogged(isLogged) {
  return {
    type: SET_IS_LOGGED,
    payload: isLogged
  };
}

export function setDefaultCenter(defaultCenter) {
  return {
    type: SET_DEFAULT_CENTER,
    payload: defaultCenter
  };
}

export function setUserId(id) {
  return {
    type: SET_USER_ID,
    payload: id
  };
}

export function login() {
  return function(dispatch, getState) {
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .get("auth", {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                if (result.data.ok) {
                  dispatch(setIsLogged(true));
                }
              },
              error => {
                dispatch(setError(error.toString()));
              }
            );
        },
        error => {}
      );
  };
}

export function logout() {
  return function(dispatch, getState) {
    firebase
      .auth()
      .signOut()
      .then(result => {
        dispatch(setIsLogged(false));
      })
      .catch(error => {});
  };
}

export function getUserId() {
  return function(dispatch, getState) {
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .get("users/", {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                dispatch(setUserId(result.data._id));
              },
              error => {
                dispatch(setError(error.toString()));
              }
            );
        },
        error => {}
      );
  };
}

export function getDefaultCenterFromUserAgent() {
  return function(dispatch, getState) {
    const language = getState().userReducer.language;
    navigator.geolocation.getCurrentPosition(
      pos => {
        dispatch(
          setDefaultCenter({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          })
        );
      },
      // User blocked geolocation
      error => {
        switch (language) {
          case "en-GB":
            // Big Ben
            dispatch(
                setDefaultCenter({
                  lat: 51.50078340519703,
                  lng: -0.12459538923064883
                })
            );
            break;
          case "en-US":
            // HP Garage
            dispatch(
              setDefaultCenter({
                lat: 37.44303269805327,
                lng: -122.15461939573288
              })
            );
            break;
          case "uk":
            // Independence Monument, Kiev
            dispatch(
              setDefaultCenter({
                lat: 50.44956196647267,
                lng: 30.52538046615541
              })
            );
            break;
          default:
            break;
        }
      }
    );
  };
}
