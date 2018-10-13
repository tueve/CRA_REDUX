import { combineReducers } from "redux";
import { saleReducer } from "./Sale/reducer";
// import adminReducer from "./Admin/reducer";

const rooReducer = combineReducers({
  saleReducer
  // addminReducer
});

export default rooReducer;
