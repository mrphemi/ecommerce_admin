import React from "react";
import PropTypes from "prop-types";
import { Form, Field } from "formik";

import useGetList from "../../../hooks/useGetList";

import ErrorMsg from "../../../components/form/ErrorMsg";
import FormField from "../../../components/form/FormField";
import SelectField from "../../../components/form/SelectField";
import Spinner from "../../../components/spinner/Spinner";

import FileInput from "./FileInput";
import Description from "./Description";
import SizeList from "./SizeList";

const ProductForm = ({ form, role }) => {
  const { list: categories, isLoading } = useGetList("categories");
  const { list: brands } = useGetList("brands");
  const { list: sizes } = useGetList("sizes");

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Form onSubmit={form.handleSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Name */}
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <FormField
            type="text"
            label="enter product name"
            id="name"
            name="name"
            placeholder="Enter product name"
          />
        </div>
        {/* Category */}
        <div className="w-full md:w-1/3 px-3">
          <SelectField
            label="Choose Category"
            title="Please choose a category"
            name="category"
            id="category"
            list={categories}
          />
        </div>
        {/* Brand */}
        <div className="w-full md:w-1/3 px-3">
          <SelectField
            label="Choose Product Brand"
            title="Please choose a brand"
            name="brand"
            id="brand"
            list={brands}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        {/* Price */}
        <div className="w-full md:w-1/3 px-3">
          <FormField
            type="text"
            label="enter product price"
            id="price"
            name="price"
            placeholder="Enter Price"
          />
        </div>
        {/* Quantity */}
        <div className="w-full md:w-1/3 px-3">
          <FormField
            type="number"
            label="enter quantity"
            id="quantity"
            name="quantity"
            placeholder="Enter Quantity"
          />
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

      <div className="flex flex-wrap -mx-3 mb-10">
        {/* Sizes */}
        <p className="px-3 uppercase tracking-wide text-gray-700 font-bold mb-4 capitalize">
          Select sizes
        </p>
        <div className="w-full px-3 flex flex-wrap">
          <Field name="availableSizes" component={SizeList} list={sizes} />
          <ErrorMsg name="availableSizes" />
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
