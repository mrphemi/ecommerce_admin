import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";

import { CategorySchema } from "../../../helpers/validation";

import Form from "../form/CategoryForm";

const Edit = ({ categoryId, navigate }) => {
  const [categoryName, setCategoryName] = useState("");

  let initialValues = {
    name: categoryName
  };

  const getSingleCategory = async categoryId => {
    try {
      const category = await baseUrl.get(`/categories/${categoryId}`);
      const name = category.data.category.name;
      setCategoryName(name);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCategory(categoryId);
  }, []);

  const handleSubmit = async values => {
    try {
      await baseUrl.put(`/categories/${categoryId}`, { name: values.name });
      navigate(`/dashboard/categories`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit category
      </h1>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={CategorySchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form form={{ handleSubmit, isSubmitting }} role="edit" />
        )}
      </Formik>
    </div>
  );
};

export default Edit;
