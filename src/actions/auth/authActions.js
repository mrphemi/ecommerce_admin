import setAuthToken from "../../helpers/setAuthToken";

import { SET_CURRENT_USER } from "../types";

// Set logged in user
export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

// Log user out
export const logout = (navigate) => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("authToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  navigate("/login");
};
