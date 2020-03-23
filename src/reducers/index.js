import { combineReducers } from "redux";
import auth from "./authReducer";
import products from "./productsReducer";
import categories from "./categoriesReducer";

export default combineReducers({
  auth,
  products,
  categories
});
