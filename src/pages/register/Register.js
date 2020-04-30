import React, { useEffect } from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";

import baseUrl from "../../helpers/api";
import handleRequestError from "../../helpers/handleRequestError";
import handleRequestSuccess from "../../helpers/handleRequestSuccess";
import { RegisterSchema } from "../../helpers/validation";

import RegisterForm from "./RegisterForm";

import { ReactComponent as Logo } from "../../assets/zap.svg";

const Register = ({ navigate }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    // if user is already authenticated, redirect to dashboard
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  // Register user
  const register = async (data, navigate, setSubmitting) => {
    try {
      await baseUrl.post("/admin/register", data);
      navigate("/login");
      handleRequestSuccess(
        "Registration Successful, Please login to continue",
        null,
      );
    } catch (error) {
      handleRequestError(error, null);
      setSubmitting(false);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    register(values, navigate, setSubmitting);
  };

  return (
    <div className="w-full xl:h-screen xl:flex">
      <div className="bg-blue-700 text-center text-white p-10 xl:py-0 xl:h-screen xl:flex flex-col justify-center items-center xl:w-1/3">
        <Logo className="mx-auto" />
        <h2 className="mt-5 text-xl">Welcome to E-commerce Admin</h2>
      </div>

      <div className="w-full px-5 pb-8 md:pb-0 mt-10 md:px-0 md:mt-20 xl:mt-0 md:flex justify-center items-center flex-col">
        {/* Registration form */}
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <RegisterForm
              form={{
                values,
                handleSubmit,
                errors,
                touched,
                isSubmitting,
              }}
            />
          )}
        </Formik>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Kayode Oluwafemi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
