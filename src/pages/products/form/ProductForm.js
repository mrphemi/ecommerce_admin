import React from "react";
import { Form, Field } from "formik";

import ErrorMsg from "../../../components/form/ErrorMsg";
import FileInput from "./FileInput";
import Description from "./Description";

const ProductForm = ({ form, role }) => {
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="name"
            name="name"
            type="text"
            placeholder="Enter product name"
          />
          <ErrorMsg name="name" />
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
              <option value="">--Please choose a category--</option>
              <option value="5e374638fcf65c1858cfbaaa">Jackets</option>
              <option value="5e46be8f8f16a26ece23e4fc">Watches</option>
              <option value="5e46be98991ea86d3a14ad9a">Bags and Purses</option>
              <option value="5e49444dacbac39d8d559f82">Shoes and Kicks</option>
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
          <ErrorMsg name="category" />
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
            type="text"
            placeholder="Enter Price"
          />
          <ErrorMsg name="price" />
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
          <ErrorMsg name="quantity" />
        </div>
        {/* Image file upload */}
        <div className="w-full md:w-1/3 px-3">
          <Field name="product_img" component={FileInput} />
          <ErrorMsg name="product_img" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-10">
        {/* Description */}
        <div className="w-full px-3">
          <Field name="description" component={Description} />
          <ErrorMsg name="description" />
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        type="submit"
      >
        {form.isSubmitting
          ? "loading..."
          : role === "create"
          ? "create product"
          : "save changes"}
      </button>
    </Form>
  );
};

export default ProductForm;
