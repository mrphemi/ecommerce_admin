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

export const getSingleProduct = productId => async dispatch => {
  try {
    const product = await baseUrl.get(`/products/${productId}`);
    const productDetails = product.data.product;
    dispatch({
      type: GET_SINGLE_PRODUCTS,
      payload: productDetails
    });
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = (navigate, formData) => async dispatch => {
  try {
    const newProduct = await baseUrl.post("/products", formData);
    console.log(newProduct);
    const { id } = newProduct.data;
    navigate(`/dashboard/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};
