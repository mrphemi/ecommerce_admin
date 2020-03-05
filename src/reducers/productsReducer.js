import { GET_PRODUCTS, GET_SINGLE_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  productsList: [],
  product: {}
};

const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: payload
      };
    case GET_SINGLE_PRODUCTS:
      return {
        ...state,
        product: payload
      };
    default:
      return state;
  }
};

export default productsReducer;
