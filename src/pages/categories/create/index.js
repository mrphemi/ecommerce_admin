import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

import { createCategory } from "../../../actions/categories/categoriesActions";

import Form from "../form/CategoryForm";

import { CategorySchema } from "../../../helpers/validation";

const Create = ({ navigate }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: ""
  };

  const handleSubmit = values => {
    console.log(values.name);
    dispatch(createCategory(navigate, { name: values.name }));
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
