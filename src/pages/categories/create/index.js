import React from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";

import Form from "../form/CategoryForm";

import { CategorySchema } from "../../../helpers/validation";

const Create = ({ navigate }) => {
  const initialValues = {
    name: ""
  };

  const handleSubmit = async values => {
    // create new category
    try {
      await baseUrl.post("/categories", { name: values.name });
      navigate(`/dashboard/categories`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        create new category
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={CategorySchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form form={{ handleSubmit, isSubmitting }} role="create" />
        )}
      </Formik>
    </div>
  );
};

export default Create;
