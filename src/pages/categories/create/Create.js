import React from "react";
import { Formik } from "formik";

import Form from "../form/CategoryForm";

import { CategorySchema } from "../../../helpers/validation";

const Create = () => {
  const initialValues = {
    name: ""
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
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
