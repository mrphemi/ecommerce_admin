import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "@reach/router";

const PrivateRoute = ({ as: Component, ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      {isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect noThrow={true} to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
