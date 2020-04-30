import React from "react";
import { Redirect } from "@reach/router";
import { useSelector } from "react-redux";

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
