import { combineReducers } from "redux";
import getPosts from "./getPosts";
import userReducers from "./userReducers";

const reducers = combineReducers({
  getPosts,
  userReducers
});

export default reducers;
