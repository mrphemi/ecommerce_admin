import decode from "jwt-decode";

import baseUrl from "../../helpers/api";
import setAuthToken from "../../helpers/setAuthToken";

import { SET_CURRENT_USER } from "../types";

// Set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

// Register user
export const register = (data, navigate) => async dispatch => {
  try {
    const register = await baseUrl.post("/admin/register", data);
    navigate("/login");
    console.log(register.data);
  } catch (error) {
    console.log(error);
  }
};

// Login user
export const login = (data, navigate) => async dispatch => {
  try {
    const login = await baseUrl.post("/admin/login", data);
    // Set token to localStorage
    const { token } = login.data;
    localStorage.setItem("authToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data
    const decoded = decode(token);
    // Set current user
    dispatch(setCurrentUser(decoded));
    navigate("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

// Log user out
export const logout = navigate => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("authToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  navigate("/login");
};
