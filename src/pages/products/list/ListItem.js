import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import { ReactComponent as View } from "../../../assets/view.svg";

const ListItem = ({ product, navigate }) => {
  const edit = productId => {
    navigate(`edit/${productId}`);
  };

  const viewInfo = productId => {
    navigate(`${productId}`);
  };

  return (
    <>
      <div className="mb-10 py-3 px-3 lg:px-0 lg:mb-0 lg:flex justify-between border-l-4 border-blue-300 lg:border-transparent shadow-xl lg:shadow-sm lg:shadow-inner transform lg:hover:scale-y-110">
        <div className="mb-4 lg:mb-0 lg:w-3/12 lg:pl-4">
          <img
            className="w-10 h-10 lg:w-6 lg:h-6"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="mb-4 lg:mb-0 capitalize font-medium lg:w-3/12">
          {product.name}
        </div>
        <div className="mb-4 lg:mb-0 lg:w-3/12">{product.category.name}</div>
        <div className="mb-4 lg:mb-0 lg:w-2/12">{product.price}</div>
        <div className="flex w-1/3 md:w-1/4 lg:px-4 lg:w-1/12 justify-between items-center">
          <View
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => viewInfo(product._id)}
          />
          <Edit
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => edit(product._id)}
          />
          <Trash
            className="w-5 h-5 lg:w-4 lg:h-4 lg:mr-0 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
          />
        </div>
      </div>
    </>
  );
};

export default ListItem;

ListItem.propTypes = {
  navigate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
