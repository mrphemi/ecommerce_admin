import React, { useEffect, useState } from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import useRequestStatus from "../../../hooks/useRequestStatus";

import { BrandSchema } from "../../../helpers/validation";

import Form from "../form/BrandForm";
import Spinner from "../../../components/spinner/Spinner";

const Edit = ({ brandId, navigate }) => {
  const [brandName, setBrandName] = useState("");
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();

  let initialValues = {
    name: brandName,
  };

  const getSingleBrand = async (brandId) => {
    try {
      requestInProgress();
      const brand = await baseUrl.get(`/brands/${brandId}`);
      const name = brand.data.result.name;
      setBrandName(name);
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

  const updateBrand = async (name) => {
    try {
      await baseUrl.put(`/brands/${brandId}`, { name });
      handleRequestSuccess("Brand Updated Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/brands`);
        }, 500),
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getSingleBrand(brandId);
  }, []);

  const handleSubmit = async (values) => {
    updateBrand(values.name);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit brand
      </h1>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={BrandSchema}
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
