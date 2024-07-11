import { combineReducers } from "redux";
import reducerReducer from "./entities";

export default combineReducers({
  entities: reducerReducer,
});
