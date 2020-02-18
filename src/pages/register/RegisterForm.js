import React from "react";
import { Link } from "@reach/router";
import { Field, Form } from "formik";

import ErrorMsg from "../../components/form/ErrorMsg";

const LoginForm = ({ form }) => {
  return (
    <Form
      className="bg-white shadow-xl rounded px-8 pt-10 pb-12 mb-4 md:w-3/4 xl:w-3/6"
      onSubmit={form.handleSubmit}
    >
      <div className="mb-5 w-full">
        <h3 className="capitalize text-blue-400 text-xl md:text-2xl text-center mb-2">
          welcome :)
        </h3>
        <p className="capitalize text-sm text-blue-400 text-center">
          please register an admin account here.
        </p>
      </div>

      <div className="md:mb-4 md:grid grid-cols-2 col-gap-5">
        <div className="mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="first_name"
          >
            First Name
          </label>
          <Field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="first_name"
            type="text"
            placeholder="Enter First Name"
            name="first_name"
          />
          <ErrorMsg name="first_name" />
        </div>
        <div className="mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <Field
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-sm mb-2 leading-tight focus:outline-none focus:shadow-outline"
            id="last_name"
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
          />
          <ErrorMsg name="last_name" />
        </div>
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
        <ErrorMsg name="email" />
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
        <ErrorMsg name="password" />
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5 md:mb-0 rounded focus:outline-none focus:shadow-outline capitalize text-center md:text-left"
          type="submit"
        >
          {form.isSubmitting ? "loading..." : "register"}
        </button>
        <p className="self-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            className="align-baseline font-bold text-blue-500 hover:text-blue-800"
            to="/"
          >
            Login
          </Link>
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
