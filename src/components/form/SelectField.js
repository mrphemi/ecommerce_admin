import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import ErrorMsg from "./ErrorMsg";

const SelectField = ({ label, title, name, id, list }) => {
  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <Field
          as="select"
          name={name}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
          id={id}
        >
          <option value="">--{title}--</option>
          {list.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </Field>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <ErrorMsg name={name} />
    </>
  );
};

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

export default SelectField;
