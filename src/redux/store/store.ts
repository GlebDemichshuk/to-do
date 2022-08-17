import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from "../reducer/reducer";

const store = createStore(reducer, composeWithDevTools());
export default store;

export type reducer = ReturnType<typeof reducer>