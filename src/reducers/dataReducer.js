import {
  DELETE_ITEM,
  RECEIVE_ITEM,
  RECEIVE_ITEMS,
  REQUEST_API
} from "../actions/dataActions";

export default function dataReducer(state = { isFetching: false }, action) {
  let items = [];
  switch (action.type) {
    case RECEIVE_ITEMS:
      if (state[action.resource]) {
        items = [...state[action.resource]];
        if (action.payload.length === 0) {
          items = [];
        } else {
          action.payload.forEach(item => {
            const index = items.findIndex(i => i._id === item._id);
            if (index === -1) {
              items.push(item);
            } else {
              items[index] = { ...items[index], ...item };
            }
          });
        }
      } else {
        items = action.payload;
      }
      return {
        ...state,
        isFetching: false,
        [action.resource]: items
      };
    case RECEIVE_ITEM:
      if (state[action.resource]) {
        items = [...state[action.resource]];
        const index = items.findIndex(i => i._id === action.payload._id);
        index === -1
          ? items.push(action.payload)
          : (items[index] = action.payload);
      } else {
        items.push(action.payload);
      }
      return {
        ...state,
        isFetching: false,
        [action.resource]: items
      };
    case REQUEST_API:
      return {
        ...state,
        isFetching: true
      };
    case DELETE_ITEM:
      return {
        ...state,
        [action.resource]: state[action.resource].filter(
          i => i._id !== action.id
        )
      };
    default:
      return state;
  }
}
