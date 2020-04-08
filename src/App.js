import React from "react";
import { Router, navigate } from "@reach/router";
import decode from "jwt-decode";
import ButterToast, { POS_TOP, POS_RIGHT } from "butter-toast";

import setAuthToken from "./helpers/setAuthToken";
import { setCurrentUser, logout } from "./actions/auth/authActions";
import store from "./store";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard";

import "./styles/app.css";

// Check for token to keep user logged in
if (localStorage.authToken) {
  // Set auth token header auth
  const token = localStorage.authToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logout(navigate));
  }
}

function App() {
  return (
    <div className="font-body">
      <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
      <Router>
        <Login path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <Dashboard path="/dashboard/*" />
      </Router>
    </div>
  );
}

export default App;
