import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import useRequestStatus from "../../../hooks/useRequestStatus";

import { CategorySchema } from "../../../helpers/validation";

import Form from "../form/CategoryForm";
import Spinner from "../../../components/spinner/Spinner";

const Edit = ({ categoryId, navigate }) => {
  const [categoryName, setCategoryName] = useState("");
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();

  let initialValues = {
    name: categoryName,
  };

  const getSingleCategory = async (categoryId) => {
    try {
      requestInProgress();
      const category = await baseUrl.get(`/categories/${categoryId}`);
      const name = category.data.result.name;
      setCategoryName(name);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () =>
        setTimeout(() => {
          window.history.back();
        }, 500)
      );
    }
  };

  const updateCategory = async (name) => {
    try {
      await baseUrl.put(`/categories/${categoryId}`, { name });
      handleRequestSuccess("Category Updated Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/categories`);
        }, 500)
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getSingleCategory(categoryId);
  }, []);

  const handleSubmit = async (values) => {
    updateCategory(values.name);
  };

  if (isLoading) return <Spinner />;

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
