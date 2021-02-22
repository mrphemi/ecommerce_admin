import React from "react";
import PropTypes from "prop-types";
import { Form } from "formik";

import FormField from "../../../components/form/FormField";

const ProfileForm = ({ form }) => {
  return (
    <Form onSubmit={form.handleSubmit}>
      <div className="personal mb-8">
        <h1 className="font-bold text-xl text-gray-700 capitalize mb-5">
          personal
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormField
              type="text"
              label="first name"
              id="first_name"
              name="first_name"
              placeholder="Edit first name"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormField
              type="text"
              label="last name"
              id="last_name"
              name="last_name"
              placeholder="Edit last name"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormField
              type="email"
              label="email"
              id="email"
              name="email"
              placeholder="Edit email"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <FormField
              type="tel"
              label="phone number"
              id="phone"
              name="phone"
              placeholder="Edit phone number"
            />
          </div>
        </div>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize"
        type="submit"
      >
        {form.isSubmitting ? "loading..." : "save changes"}
      </button>
    </Form>
  );
};

export default ProfileForm;

ProfileForm.propTypes = {
  form: PropTypes.object.isRequired,
};
