import { SET_PRODUCTS } from "./types";

// Set product list
export const setProducts = (meta, products) => {
  return {
    type: SET_PRODUCTS,
    payload: { products, meta },
  };
};
