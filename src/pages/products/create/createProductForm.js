import React from "react";
import { Form, Field, ErrorMessage } from "formik";

import FileInput from "./FileInput";

const createProductForm = ({ form }) => {
  return (
    <Form onSubmit={form.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Name */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="name"
          >
            enter product name
          </label>
          <Field
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
          />
          <p className="text-red-500 text-sm italic">
            <ErrorMessage name="name" />
          </p>
        </div>
        {/* Category */}
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="category"
          >
            Choose Category
          </label>
          <div className="relative">
            <Field
              as="select"
              name="category"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
            >
              <option value="5e374638fcf65c1858cfbaaa">Jackets</option>
              <option value="5e374638fcf65c1858cfbaaa">Watches</option>
              <option value="5e374638fcf65c1858cfbaaa">Bags and Purses</option>
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
          <p className="text-red-500 text-sm italic">
            <ErrorMessage name="category" />
          </p>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Price */}
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="price"
          >
            enter price
          </label>
          <Field
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="price"
            name="price"
            type="number"
            placeholder="Enter Price"
          />
          <p className="text-red-500 text-sm italic">
            <ErrorMessage name="price" />
          </p>
        </div>
        {/* Quantity */}
        <div className="w-full md:w-1/3 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2 capitalize"
            htmlFor="quantity"
          >
            enter quantity
          </label>
          <Field
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="quantity"
            name="quantity"
            type="number"
            placeholder="Enter Quantity"
          />
          <p className="text-red-500 text-sm italic">
            <ErrorMessage name="price" />
          </p>
        </div>
        {/* Image file upload */}
        <div className="w-full md:w-1/3 px-3">
          <Field name="product_img" component={FileInput} />
          <p className="text-red-500 text-sm italic">
            <ErrorMessage name="product_img" />
          </p>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        type="submit"
      >
        {form.isSubmitting ? "loading..." : "create"}
      </button>
    </Form>
  );
};

export default createProductForm;
