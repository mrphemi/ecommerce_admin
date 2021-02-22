import React from "react";
import { Field } from "formik";

const CheckBox = (props) => {
  const isChecked = (field) => {
    const IdList = field.value.map((item) => item._id);
    return IdList.includes(props.value);
  };
  return (
    <Field name={props.name}>
      {({ field, form }) => (
        <div className="pretty p-default p-curve">
          <input
            id={props.value}
            type="checkbox"
            {...props}
            defaultChecked={isChecked(field)}
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
              {props.display_name}
            </label>
          </div>
        </div>
      )}
    </Field>
  );
};

export default CheckBox;
