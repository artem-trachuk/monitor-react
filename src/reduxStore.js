import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import dataReducer from "./reducers/dataReducer";
import { reducer as formReducer } from "redux-form";
import { issuesReducer } from "./reducers/issuesReducer";
import { navigationReducer } from "./reducers/navigationReducer";
import contactsReducer from "./reducers/contactsReducer";
import { permissionsReducer } from "./reducers/permissionsReducer";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

const store = createStore(
  combineReducers({
    userReducer: userReducer,
    dataReducer: dataReducer,
    form: formReducer,
    issuesReducer: issuesReducer,
    navigationReducer: navigationReducer,
    contactsReducer: contactsReducer,
    permissionsReducer: permissionsReducer
  }),
  {},
  applyMiddleware(thunkMiddleware, logger )
);

export default store;
