import firebase from "firebase/app";
import "firebase/auth";
import { axiosHttpClient } from "../axiosInstance";
import { setNavigatedLink } from "./navigationActions";

/*
 * Actions
 */

export const RECEIVE_ITEMS = "RECEIVE_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REQUEST_API = "REQUEST_API";

/*
 * Action creators
 */

export function requestAPI() {
  return {
    type: REQUEST_API
  };
}

export function receiveItem(item, resource) {
  return {
    type: RECEIVE_ITEM,
    payload: item,
    resource: resource
  };
}

export function receiveItems(items, resource) {
  return {
    type: RECEIVE_ITEMS,
    payload: items,
    resource: resource
  };
}

/*
 * API calls
 */

export function getDataByAPI(resource, id) {
  return function(dispatch, getState) {
    dispatch(requestAPI());
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .get(id ? resource + "/" + id : resource, {
              headers: {
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                if (id) {
                  dispatch(receiveItem(result.data.result, resource));
                } else {
                  dispatch(receiveItems(result.data.result, resource));
                }
              },
              error => {}
            );
        },
        error => {}
      );
  };
}

export function postDataByAPI(resource, data) {
  return function(dispatch, getState) {
    const formData = new FormData();
    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos.item(i));
      }
    }
    if (data.documents) {
      for (let i = 0; i < data.documents.length; i++) {
        formData.append("documents", data.documents.item(i));
      }
    }
    formData.append(
      "values",
      JSON.stringify(
        Object.assign(
          {},
          { ...data },
          { photos: undefined, documents: undefined }
        )
      )
    );
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .post(resource, formData, {
              headers: {
                "content-type": "multipart/form-data",
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                dispatch(
                  setNavigatedLink({
                    resource: resource,
                    _id: result.data.result._id
                  })
                );
              },
              error => {}
            );
        },
        error => {}
      );
  };
}

/**
 * Patch resource by API call
 * @param resourceName Name of API/resource, for example "companies/"
 * @param data
 */
export function patchDataByAPI(resourceName, data) {
  return function(dispatch, getState) {
    const formData = new FormData();
    if (data.logo) {
      formData.append("logo", data.logo.item(0));
    }
    if (data.photos) {
      for (let i = 0; i < data.photos.length; i++) {
        formData.append("photos", data.photos.item(i));
      }
    }
    if (data.documents) {
      for (let i = 0; i < data.documents.length; i++) {
        formData.append("documents", data.documents.item(i));
      }
    }
    formData.append(
      "values",
      JSON.stringify(
        Object.assign(
          {},
          { ...data },
          { photos: undefined, documents: undefined }
        )
      )
    );
    firebase
      .auth()
      .currentUser.getIdToken(false)
      .then(
        idToken => {
          axiosHttpClient
            .patch(resourceName + "/" + data._id, formData, {
              headers: {
                "content-type": "multipart/form-data",
                Authorization: "Bearer " + idToken
              }
            })
            .then(
              result => {
                dispatch(
                  setNavigatedLink({ resource: resourceName, _id: data._id })
                );
              },
              error => {}
            );
        },
        error => {}
      );
  };
}
