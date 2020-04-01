import React from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";

import Form from "../form/CategoryForm";

import { CategorySchema } from "../../../helpers/validation";

const Create = ({ navigate }) => {
  const initialValues = {
    name: ""
  };

  // create new category
  const createCategory = async name => {
    try {
      await baseUrl.post("/categories", { name });
      handleRequestSuccess("Category Created Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/categories`);
        }, 500)
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  const handleSubmit = values => {
    createCategory(values.name);
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
