import {
  RECEIVE_CONTACTS,
  REQUEST_CONTACTS,
  SET_CONTACTS_ERROR
} from "../actions/contactsActions";
import { combineReducers } from "redux";

function contacts(
  state = { isFetching: false, contacts: [], error: null },
  action
) {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isFetching: false,
        error: null
      };
    case SET_CONTACTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}

const contactsReducer = combineReducers({ contacts });

export default contactsReducer;
