import React, { useState } from "react";
import PropTypes from "prop-types";

const SizeList = ({ field, form, list }) => {
  const [sizes, setSizes] = useState([]);

  const handleCheck = (e) => {
    e.preventDefault();
    const { value, checked } = e.target;
    if (checked) {
      setSizes([...sizes, value]);
    } else {
      const filtered = sizes.filter((size) => size !== value);
      setSizes(filtered);
    }
    setTimeout(() => {
      form.setFieldValue(field.name, sizes);
    }, 1000);
  };

  return (
    <>
      {list.map((item) => (
        <div key={item._id}>
          <label htmlFor="itembox">{item.size}</label>
          <input
            type="checkbox"
            name="availableSizes"
            id="itembox"
            value={item._id}
            onChange={handleCheck}
          />
        </div>
      ))}
    </>
  );
};

SizeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SizeList;
