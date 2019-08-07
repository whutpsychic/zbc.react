import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

var obj = {};

for (let i in reducers) {
	obj[i] = reducers[i];
}

const store = createStore(combineReducers(obj));

export default store;
