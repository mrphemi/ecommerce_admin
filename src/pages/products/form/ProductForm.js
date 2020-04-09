import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";

import baseUrl from "../../../helpers/api";

import ErrorMsg from "../../../components/form/ErrorMsg";
import FileInput from "./FileInput";
import Description from "./Description";

const ProductForm = ({ form, role }) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const categories = await baseUrl.get("/categories");
      const categoriesList = categories.data.results;
      setCategories(categoriesList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
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
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
              id="category"
            >
              <option value="">--Please choose a category--</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
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
            className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border focus:border-2 focus:border-gray-500"
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

ProductForm.propTypes = {
  form: PropTypes.object.isRequired,
  role: PropTypes.string.isRequired,
};
