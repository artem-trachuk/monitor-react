import {
  RECEIVE_CONTACT,
  RECEIVE_CONTACTS,
  REMOVE_CONTACT,
  REQUEST_CONTACTS,
  SET_CONTACTS_ERROR
} from "../actions/contactsActions";

export default function contacts(
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
    case RECEIVE_CONTACT:
      const contactsCopy = [...state.contacts];
      const contactIndex = contactsCopy.findIndex(
        c => c._id === action.payload._id
      );
      if (contactIndex !== -1) {
        contactsCopy[contactIndex] = action.payload;
      } else {
        contactsCopy.push(action.payload);
      }
      return {
        ...state,
        isFetching: false,
        contacts: contactsCopy
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        isFetching: false,
        contacts: state.contacts.filter(c => c._id !== action.payload)
      };
    default:
      return state;
  }
}
