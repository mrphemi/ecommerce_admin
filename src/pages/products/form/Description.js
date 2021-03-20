import React from "react";

const Description = ({ field, form }) => {
  const handleChange = (e) => {
    const text = e.target.value;
    form.setFieldValue(field.name, text);
  };

  return (
    <>
      <label className="form_label" htmlFor="description">
        Add description
      </label>
      <textarea
        className="form_styles w-full"
        id="description"
        cols="30"
        rows="10"
        value={form.values.description}
        onChange={handleChange}
      ></textarea>
    </>
  );
};

export default Description;
