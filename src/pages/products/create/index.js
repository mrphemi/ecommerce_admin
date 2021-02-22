import React from "react";
import { Formik } from "formik";
import { navigate } from "@reach/router";

import baseUrl from "../../../helpers/api";
import handleHttpSuccess from "../../../helpers/handleRequestSuccess";
import handleHttpError from "../../../helpers/handleRequestError";

import { CreateProductSchema } from "../../../helpers/validation";

import Form from "../form/ProductForm";

const CreateProduct = () => {
  const initialValues = {
    name: "",
    category: "",
    brand: "",
    description: "",
    price: "",
    product_img: null,
    availableSizes: [],
  };

  // Create new product
  const createProduct = async (formData) => {
    try {
      const newProduct = await baseUrl.post("/products", formData);
      const { id } = newProduct.data;
      handleHttpSuccess("Product Created Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/products/${id}`);
        }, 500),
      );
    } catch (error) {
      handleHttpError(error, null);
    }
  };

  const handleSubmit = (values) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("category", values.category);
    form.append("description", values.description);
    form.append("price", Number(values.price));
    form.append("product_img", values.product_img);
    form.append("brand", values.brand);
    let sizes = values.availableSizes.map((size) => ({
      size: size.size,
      quantity: size.quantity,
    }));
    form.append("availableSizes", JSON.stringify(sizes));
    createProduct(form);
  };

  return (
    <>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        create new product
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateProductSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            role="create"
            form={{
              handleSubmit,
              isSubmitting,
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default CreateProduct;
