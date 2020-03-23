import baseUrl from "../../helpers/api";

import { GET_PRODUCTS, GET_SINGLE_PRODUCTS } from "../types";

// Get product list
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

// Get single product info.
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

// clean single product when product info page un-mounts
export const cleanSingleProduct = () => dispatch => {
  dispatch({
    type: GET_SINGLE_PRODUCTS,
    payload: {}
  });
};

// Create new product
export const createProduct = (navigate, formData) => async dispatch => {
  try {
    const newProduct = await baseUrl.post("/products", formData);
    const { id } = newProduct.data;
    navigate(`/dashboard/products/${id}`);
  } catch (error) {
    console.log(error);
  }
};

// Edit product info.
export const editProduct = (
  navigate,
  productId,
  formData
) => async dispatch => {
  try {
    await baseUrl.put(`/products/${productId}`, formData);
    navigate(`/dashboard/products/${productId}`);
  } catch (error) {
    console.log(error);
  }
};
