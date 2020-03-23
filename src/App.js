import React, { useEffect } from "react";
import { Router, navigate } from "@reach/router";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import setAuthToken from "./helpers/setAuthToken";
import { setCurrentUser, logout } from "./actions/auth/authActions";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard";

import "./styles/app.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Check for token to keep user logged in
    if (localStorage.authToken) {
      // Set auth token header auth
      const token = localStorage.authToken;
      setAuthToken(token);
      // Decode token and get user info and exp
      const decoded = decode(token);
      // Set user and isAuthenticated
      dispatch(setCurrentUser(decoded));
      // redirect to dashboard
      navigate("/dashboard");
      // Check for expired token
      const currentTime = Date.now() / 1000; // to get in milliseconds
      if (decoded.exp < currentTime) {
        // Logout user
        dispatch(logout(navigate));
      }
    }
  }, [dispatch]);

  return (
    <div className="font-body">
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
