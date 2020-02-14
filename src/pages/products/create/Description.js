import React from "react";

const Description = ({ field, form }) => {
  const handleChange = e => {
    const text = e.target.value;
    form.setFieldValue(field.name, text);
  };

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor="description"
      >
        Add description
      </label>
      <textarea
        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 leading-tight focus:outline-none"
        id="description"
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default Description;
