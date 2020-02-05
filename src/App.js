import React from "react";
import { Router } from "@reach/router";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopNav from "./components/TopNav";

import "./styles/app.css";

function App() {
  return (
    <>
      <Router>
        <Login path="/" />
        <Register path="/register" />
      </Router>
    </>
  );
}

export default App;
