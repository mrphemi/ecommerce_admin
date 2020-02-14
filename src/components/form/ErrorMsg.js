import React from "react";
import { ErrorMessage } from "formik";

const ErrorMsg = ({ name }) => {
  return (
    <p className="text-red-500 text-xs italic">
      <ErrorMessage name={name} />
    </p>
  );
};

export default ErrorMsg;
