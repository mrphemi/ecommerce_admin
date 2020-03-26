import React from "react";
import { Formik } from "formik";
import ButterToast, { Cinnamon } from "butter-toast";

import baseUrl from "../../../helpers/api";

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
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            scheme={Cinnamon.Crunch.SCHEME_GREEN}
            content={() => "Category Created Successfully"}
            title="Success"
          />
        )
      });
      setTimeout(() => {
        navigate(`/dashboard/categories`);
      }, 500);
    } catch (error) {
      console.log(error);
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
