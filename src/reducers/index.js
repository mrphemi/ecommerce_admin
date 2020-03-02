import { combineReducers } from "redux";
import auth from "./authReducer";
import products from "./productsReducer";

export default combineReducers({
  auth,
  products
});
