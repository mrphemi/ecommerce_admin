import React from "react";
import { Formik } from "formik";

import { CreateProductSchema } from "../../../helpers/validation";

import Form from "../form/ProductForm";

const CreateProduct = () => {
  const initialValues = {
    name: "",
    category: "",
    description: "",
    price: "",
    quantity: 1,
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
              isSubmitting
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default CreateProduct;
