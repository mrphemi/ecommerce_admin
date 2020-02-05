import React from "react";
import { Link } from "@reach/router";
import { Field, Form, ErrorMessage } from "formik";

const LoginForm = ({ form }) => {
  return (
    <Form
      className="bg-white shadow-md rounded px-8 pt-10 pb-12 mb-4 md:w-2/3 xl:w-2/5"
      onSubmit={form.handleSubmit}
    >
      <div className="mb-4 w-full">
        <h3 className="capitalize text-blue-400 text-xl md:text-2xl text-center mb-2">
          welcome back :)
        </h3>
        <p className="capitalize text-sm text-blue-400 text-center">
          please login to access dashboard. admin accounts only
        </p>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <Field
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter Email"
          name="email"
        />
        <p className="text-red-500 text-xs italic">
          <ErrorMessage name="email" />
        </p>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <Field
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="**********"
          name="password"
        />
        <p className="text-red-500 text-xs italic">
          <ErrorMessage name="password" />
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
          type="submit"
        >
          {form.isSubmitting ? "loading..." : "login"}
        </button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          to="#"
        >
          Forgot Password?
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
