import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";

import { ProfileSchema } from "../../../helpers/validation";
import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import useRequestStatus from "../../../hooks/useRequestStatus";

import Form from "../form";
import Spinner from "../../../components/spinner/Spinner";

const EditProfile = ({ navigate }) => {
  const [user, setUser] = useState({});
  const authUser = useSelector((state) => state.auth.user);
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();

  let initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone: user.phone,
  };

  const getProfile = async (userId) => {
    try {
      requestInProgress();
      const user = await baseUrl.get(`/users/${userId}`);
      const info = user.data.result;
      setUser(info);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () => {
        setTimeout(() => {
          window.history.back();
        }, 500);
      });
    }
  };

  useEffect(() => {
    getProfile(authUser.id);
  }, []);

  const updateProfile = async (values) => {
    try {
      await baseUrl.put(`/users/${authUser.id}`, values);
      handleRequestSuccess("Profile Updated Successfully", () =>
        setTimeout(() => {
          window.history.back();
        }, 500),
      );
    } catch (error) {
      handleRequestError(error, null);
    }
  };

  const handleSubmit = async (values) => {
    updateProfile(values);
  };

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit profile details
      </h1>

      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={ProfileSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form form={{ handleSubmit, isSubmitting }} />
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
