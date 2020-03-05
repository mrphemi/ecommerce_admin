import baseUrl from "./api";

const setAuthToken = token => {
  if (token) {
    // Apply access_token to every request if logged in
    baseUrl.defaults.headers.common["access_token"] = token;
  } else {
    // Delete access_token
    delete baseUrl.defaults.headers.common["access_token"];
  }
};

export default setAuthToken;
