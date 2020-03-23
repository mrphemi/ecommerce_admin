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
    <tr className="shadow-sm shadow-inner text-gray-700">
      <td className="w-1/6 px-4 py-2">
        <img className="w-10 h-10" src={product.image} alt={product.name} />
      </td>
      <td className="w-1/4 px-4 py-2">{product.name}</td>
      <td className="w-1/4 px-4 py-2">{product.category.name}</td>
      <td className="w-1/4 px-4 py-2">{product.price}</td>
      <td className="w-1/4 px-4 py-2">
        <div className="flex">
          <View
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => viewInfo(product._id)}
          />
          <Edit
            className="ml-6 w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => edit(product._id)}
          />
          <Trash
            className="ml-6 w-5 h-5 lg:w-4 lg:h-4 lg:mr-4 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
          />
        </div>
      </td>
    </tr>
  );
};

export default ListItem;

ListItem.propTypes = {
  navigate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
