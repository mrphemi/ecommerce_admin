import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import ErrorMsg from "./ErrorMsg";

const FormField = ({ type, label, id, placeholder }) => {
  return (
    <>
      <label className="form_label" htmlFor={id}>
        {label}
      </label>
      <Field
        className="form_styles mb-3"
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
      />

      <ErrorMsg name={id} />
    </>
  );
};

FormField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormField;
