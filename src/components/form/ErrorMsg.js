import React from "react";
import { ErrorMessage } from "formik";

const ErrorMsg = ({ name }) => {
  return (
    <p className="error_msg">
      <ErrorMessage name={name} />
    </p>
  );
};

export default ErrorMsg;
