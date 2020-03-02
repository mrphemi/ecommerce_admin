import baseUrl from "../../helpers/api";

import { GET_PRODUCTS, GET_SINGLE_PRODUCTS } from "../types";

export const getProducts = () => async dispatch => {
  try {
    const products = await baseUrl.get("/products");
    const productsList = products.data.products;
    dispatch({
      type: GET_PRODUCTS,
      payload: productsList
    });
  } catch (error) {
    console.log(error);
  }
};
