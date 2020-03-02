import React from "react";
import { Link } from "@reach/router";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const ListItem = ({ product, navigate }) => {
  const edit = productId => {
    navigate(`edit/${productId}`);
  };

  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-2xl transform hover:scale-105">
      <Link to={product._id}>
        <div>
          <img
            className="h-40 w-full block object-scale-down mx-auto"
            src={product.image}
            alt={product.name}
          />
        </div>
        <div className="px-6 py-6">
          <div>
            <p className="font-semibold text-lg text-gray-700 mb-3">
              {product.name}
            </p>
            <p className="text-gray-500">{`$ ${product.price}`}</p>
          </div>
        </div>
      </Link>
      <div className="px-6 pb-4">
        <Trash
          className="w-5 h-5 text-gray-700 hover:text-red-500 inline-block text-sm font-semibold mr-4 cursor-pointer"
          title="Delete product"
        />
        <Edit
          className="w-5 h-5 text-gray-700 hover:text-blue-500 inline-block text-sm font-semibold mr-4 cursor-pointer"
          title="Edit product"
          onClick={() => edit(product._id)}
        />
      </div>
    </div>
  );
};

export default ListItem;
