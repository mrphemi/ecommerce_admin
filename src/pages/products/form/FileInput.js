import React from "react";

const FileInput = ({ field, form }) => {
  const handleChange = e => {
    const file = e.currentTarget.files[0];
    form.setFieldValue(field.name, file);
  };

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
        htmlFor="image"
      >
        choose image
      </label>

      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        type="file"
        id="image"
        placeholder="Choose Product image"
        accept="image/*"
        onChange={handleChange}
      />
    </>
  );
};

export default FileInput;
