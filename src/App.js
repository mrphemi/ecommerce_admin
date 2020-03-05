import React from "react";
import { Router } from "@reach/router";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Dashboard from "./pages/dashboard";

import "./styles/app.css";

function App() {
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
