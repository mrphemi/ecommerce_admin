import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import ErrorMsg from "./ErrorMsg";

const FormField = ({ type, label, id, name, placeholder }) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <Field
        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />

      <ErrorMsg name={name} />
    </>
  );
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormField;
