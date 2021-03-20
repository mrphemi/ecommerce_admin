import React from "react";

const FileInput = ({ field, form }) => {
  const handleChange = (e) => {
    const file = e.currentTarget.files[0];
    form.setFieldValue(field.name, file);
  };

  return (
    <>
      <label className="form_label" htmlFor="image">
        choose image
      </label>

      <input
        className="form_styles w-full mb-3"
        type="file"
        id="image"
        placeholder="choose product image"
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
};

export default FileInput;
