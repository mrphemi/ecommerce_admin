import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import ErrorMsg from "./ErrorMsg";

const SelectField = ({ label, title, id, list }) => {
  return (
    <>
      <label className="form_label" htmlFor={id}>
        {label}
      </label>
      <div>
        <Field
          as="select"
          name={id}
          className="w-full form_styles pr-8 mb-3"
          id={id}
        >
          <option value="">--{title}--</option>
          {list.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMsg name={id} />
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default SelectField;
