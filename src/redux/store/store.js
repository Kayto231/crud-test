import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { apiReducer } from "../reducers/apiReducer";
import { modalReducer } from "../reducers/modalReducer";

const rootReducer = combineReducers({
  api: apiReducer,
  modal: modalReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
