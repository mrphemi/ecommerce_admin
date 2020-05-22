import React, { useState } from "react";
import PropTypes from "prop-types";

const SizeList = ({ field, form, list }) => {
  const [sizes, setSizes] = useState([]);

  const handleCheck = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSizes([...sizes, value]);
    } else {
      const filtered = sizes.filter((size) => size !== value);
      setSizes(filtered);
    }
    form.setFieldValue(field.name, sizes);
  };

  return (
    <>
      {list.map((item, i) => (
        <div className="pretty p-default p-curve" key={item._id}>
          <input
            id="one"
            type="checkbox"
            name="availableSizes"
            value={item._id}
            onChange={handleCheck}
          />
          <div className="state">
            <label htmlFor="one" className="text-gray-700 align-top">
              {item.size}
            </label>
          </div>
        </div>
      ))}
    </>
  );
};

SizeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SizeList;
