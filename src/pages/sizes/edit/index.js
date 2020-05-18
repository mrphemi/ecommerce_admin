import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import useRequestStatus from "../../../hooks/useRequestStatus";

import { SizeSchema } from "../../../helpers/validation";

import Form from "../form/SizeForm";
import Spinner from "../../../components/spinner/Spinner";

const Edit = ({ sizeId, navigate }) => {
  const [size, setSize] = useState("");
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();

  let initialValues = {
    size: size,
  };

  const getSingleSize = async (sizeId) => {
    try {
      requestInProgress();
      const size = await baseUrl.get(`/sizes/${sizeId}`);
      setSize(size.data.result.size);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () =>
        setTimeout(() => {
          window.history.back();
        }, 500),
      );
    }
  };

  const updateSize = async (size) => {
    try {
      await baseUrl.put(`/sizes/${sizeId}`, { size });
      handleRequestSuccess("Size Updated Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/sizes`);
        }, 500),
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getSingleSize(sizeId);
  }, []);

  const handleSubmit = async (values) => {
    updateSize(Number(values.size));
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit size
      </h1>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={SizeSchema}
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
