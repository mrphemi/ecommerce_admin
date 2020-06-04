import React from "react";
import PropTypes from "prop-types";

import CheckBox from "../../../components/form/CheckBox";

const SizeList = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <CheckBox
          name="availableSizes"
          value={item._id}
          key={item._id}
          displayname={item.size}
        />
      ))}
    </>
  );
};

SizeList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default SizeList;
