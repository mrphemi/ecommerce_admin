import React from "react";
import { Form, Field } from "formik";

import ErrorMsg from "../../../components/form/ErrorMsg";

const SizeForm = ({ form, role }) => {
  return (
    <Form onSubmit={form.handleSubmit}>
      <div className="mb-8 md:w-2/3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
          htmlFor="size"
        >
          enter size (european standard)
        </label>
        <Field
          className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="size"
          name="size"
          type="text"
          placeholder="Enter Size"
        />
        <ErrorMsg name="size" />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        type="submit"
      >
        {form.isSubmitting
          ? "loading..."
          : role === "create"
          ? "create size"
          : "save changes"}
      </button>
    </Form>
  );
};

export default SizeForm;
