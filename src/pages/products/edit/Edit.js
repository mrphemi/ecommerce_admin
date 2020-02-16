import React from "react";
import { Formik } from "formik";

import { CreateProductSchema } from "../../../helpers/validation";

import Form from "../form/ProductForm";

const EditProduct = () => {
  const initialValues = {
    name: "Nike shoes",
    category: "5e49444dacbac39d8d559f82",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 89.99,
    quantity: 10,
    product_img: null
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("category", values.category);
    form.append("description", values.description);
    form.append("price", Number(values.price));
    form.append("quantity", values.quantity);
    form.append("product_img", values.product_img);

    console.log(values, form.get("price"));
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit product details
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateProductSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleSubmit, isSubmitting }) => (
          <Form
            role="edit"
            form={{
              values,
              handleSubmit,
              errors,
              touched,
              isSubmitting
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default EditProduct;
