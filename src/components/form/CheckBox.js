import React from "react";
import { Field } from "formik";

const CheckBox = (props) => {
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div className="pretty p-default p-curve">
          <input
            id={props.value}
            type="checkbox"
            {...props}
            checked={field.value.includes(props.value)}
            onChange={() => {
              if (field.value.includes(props.value)) {
                const nextValue = field.value.filter(
                  (value) => value !== props.value,
                );
                form.setFieldValue(props.name, nextValue);
              } else {
                const nextValue = field.value.concat(props.value);
                form.setFieldValue(props.name, nextValue);
              }
            }}
          />
          <div className="state">
            <label htmlFor={props.value} className="text-gray-700 align-top">
              {props.displayname}
            </label>
          </div>
        </div>
      )}
    </Field>
  );
};

export default CheckBox;
