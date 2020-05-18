import React from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";

import Form from "../form/SizeForm";

import { SizeSchema } from "../../../helpers/validation";

const Create = ({ navigate }) => {
  const initialValues = {
    size: "",
  };

  // create new size
  const createSize = async (size) => {
    try {
      await baseUrl.post("/sizes", { size });
      handleRequestSuccess("Size Created Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/sizes`);
        }, 500),
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  const handleSubmit = (values) => {
    createSize(Number(values.size));
  };

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        create new size
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={SizeSchema}
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
