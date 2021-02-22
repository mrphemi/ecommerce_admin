import { SET_PRODUCTS } from "../actions/types";

const INITIAL_STATE = {
  meta: {},
  products: [],
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
        meta: action.payload.meta,
      };
    default:
      return state;
  }
};

export default productsReducer;
