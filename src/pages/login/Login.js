import React from "react";
import { Formik } from "formik";

import { LoginSchema } from "../../helpers/validation";
import LoginForm from "./LoginForm";

import cartIcon from "../../assets/cart-white.png";

const Login = () => {
  return (
    <div className="w-full xl:h-screen xl:flex">
      <div className="bg-blue-700 text-center text-white p-10 xl:py-0 xl:h-screen xl:flex flex-col justify-center items-center xl:w-1/3">
        <div className="w-16 mx-auto">
          <img className="w-full" src={cartIcon} alt="Cart icon" />
        </div>
        <h2 className="mt-5 text-xl">Welcome to Ecommerce Admin</h2>
      </div>

      {/* Login form */}
      <div className="w-full px-5 mt-10 md:px-0 md:mt-20 xl:mt-0 md:flex justify-center items-center flex-col">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, errors, touched, handleSubmit, isSubmitting }) => (
            <LoginForm
              form={{ values, handleSubmit, errors, touched, isSubmitting }}
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
