import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  clients: userReducer
});

export default rootReducer;
