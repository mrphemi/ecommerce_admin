import React, { useEffect } from "react";
import { Formik } from "formik";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

import baseUrl from "../../helpers/api";
import setAuthToken from "../../helpers/setAuthToken";
import handleRequestError from "../../helpers/handleRequestError";
import handleRequestSuccess from "../../helpers/handleRequestSuccess";
import { setCurrentUser } from "../../actions/authActions";

import { LoginSchema } from "../../helpers/validation";

import LoginForm from "./LoginForm";

import { ReactComponent as Logo } from "../../assets/zap.svg";

const Login = ({ navigate }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    // if user is authenticated, redirect to dashboard
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated, navigate]);

  // Login user
  const login = async (data, navigate, setSubmitting) => {
    try {
      const login = await baseUrl.post("/admin/login", data);
      // Set token to localStorage
      const { token } = login.data;
      localStorage.setItem("authToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = decode(token);
      // Set current user and isAuthenticated status
      dispatch(setCurrentUser(decoded));
      navigate("/dashboard");
      handleRequestSuccess("Login Successful", null);
    } catch (error) {
      handleRequestError(error, null);
      setSubmitting(false);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    login(values, navigate, setSubmitting);
  };

  return (
    <div className="w-full xl:h-screen xl:flex">
      <div className="bg-blue-700 text-center text-white p-10 xl:py-0 xl:h-screen xl:flex flex-col justify-center items-center xl:w-1/3">
        <Logo className="mx-auto" />
        <h2 className="mt-5 text-xl">Welcome to Bolt E-commerce Admin</h2>
      </div>

      {/* Login form */}
      <div className="w-full px-5 pb-8 md:pb-0 mt-10 md:px-0 md:mt-20 xl:mt-0 md:flex justify-center items-center flex-col">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <LoginForm
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

export default Login;
