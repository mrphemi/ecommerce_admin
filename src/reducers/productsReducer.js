import { GET_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  productsList: [],
  product: {}
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsList: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
