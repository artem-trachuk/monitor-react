import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";
import { companyResource } from "../helpers/resourceNames";
import { getDataByAPI } from "./dataActions";

/*
 * Actions
 */

export const REQUEST_CONTACTS = "REQUEST_CONTACTS";
export const RECEIVE_CONTACTS = "RECEIVE_CONTACTS";
export const SET_CONTACTS_ERROR = "SET_CONTACTS_ERROR";
export const RECEIVE_CONTACT = "RECEIVE_CONTACT";
export const REMOVE_CONTACT = "REMOVE_CONTACT";

/*
 * Action creators
 */

export function requestContacts() {
  return {
    type: REQUEST_CONTACTS
  };
}

export function receiveContacts(contacts) {
  return {
    type: RECEIVE_CONTACTS,
    payload: contacts
  };
}

export function receiveContact(contact) {
  return {
    type: RECEIVE_CONTACT,
    payload: contact
  };
}

export function setContactsError(error) {
  return {
    type: SET_CONTACTS_ERROR,
    payload: error
  };
}

export function removeContact(id) {
  return {
    type: REMOVE_CONTACT,
    payload: id
  };
}

/*
 * API calls
 */

export function fetchContacts() {
  return dispatch => {
    dispatch(requestContacts());
    return firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.get("contacts", {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(
        result => dispatch(receiveContacts(result.data.result)),
        error => dispatch(setContactsError(error))
      );
  };
}

export function fetchContact(id) {
  return dispatch => {
    dispatch(requestContacts());
    return firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.get("contacts/" + id, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(result => dispatch(receiveContact(result.data.result)));
  };
}

export function addContact(contact) {
  return dispatch =>
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.post("contacts", contact, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(result => dispatch(getDataByAPI(companyResource, contact.company)));
}

export function patchContact(contact) {
  const id = contact._id;
  return dispatch =>
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.patch("contacts/" + id, contact, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(result => dispatch(fetchContact(id)));
}

export function deleteContact(id) {
  return dispatch =>
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(idToken =>
        axiosHttpClient.delete("contacts/" + id, {
          headers: {
            Authorization: "Bearer " + idToken
          }
        })
      )
      .then(result => {
        dispatch(removeContact(id));
      });
}
