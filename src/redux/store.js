import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import httpMiddleware from "../middleware/http";

const middlewares = [thunk];
middlewares.push(httpMiddleware);
const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;
