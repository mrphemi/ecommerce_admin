import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply access_token to every request if logged in
    axios.defaults.headers.common["access_token"] = token;
  } else {
    // Delete access_token
    delete axios.defaults.headers.common["access_token"];
  }
};

export default setAuthToken;
