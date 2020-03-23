import baseUrl from "../../helpers/api";

import { GET_CATEGORIES } from "../types";

// Get category list
export const getCategories = () => async dispatch => {
  try {
    const categories = await baseUrl.get("/categories");
    const categoriesList = categories.data.categories;
    dispatch({
      type: GET_CATEGORIES,
      payload: categoriesList
    });
  } catch (error) {
    console.log(error);
  }
};

// Create new category
export const createCategory = (navigate, category) => async dispatch => {
  try {
    await baseUrl.post("/categories", category);
    navigate(`/dashboard/categories`);
  } catch (error) {
    console.log(error);
  }
};
