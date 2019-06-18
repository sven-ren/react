import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import mceReducer from "./mceReducer";

const rootReducer = combineReducers({
  router: routerReducer,
  mce: mceReducer,
});

export default rootReducer;
