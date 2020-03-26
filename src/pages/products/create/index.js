import React from "react";
import { Formik } from "formik";
import { navigate } from "@reach/router";
import ButterToast, { Cinnamon } from "butter-toast";

import baseUrl from "../../../helpers/api";

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

  // Create new product
  const createProduct = async formData => {
    try {
      const newProduct = await baseUrl.post("/products", formData);
      const { id } = newProduct.data;
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            scheme={Cinnamon.Crunch.SCHEME_GREEN}
            content={() => "Product Created Successfully"}
            title="Success"
          />
        )
      });
      setTimeout(() => {
        navigate(`/dashboard/products/${id}`);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = values => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("category", values.category);
    form.append("description", values.description);
    form.append("price", Number(values.price));
    form.append("quantity", values.quantity);
    form.append("product_img", values.product_img);

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
              isSubmitting
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default CreateProduct;
