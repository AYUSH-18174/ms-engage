import { combineReducers, createStore } from "redux";
import { authReducer } from "../reducers/auth";

const reducer = combineReducers({
  user: authReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;
