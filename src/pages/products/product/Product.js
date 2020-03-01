import React from "react";

import Quantity from "./Quantity";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const product = {
  id: "5e46bdde1cd99777c65952b1",
  name: "Nike shoes",
  price: 89.99,
  quantity: 6,
  image:
    "https://res.cloudinary.com/mrphemi/image/upload/v1547072408/samples/ecommerce/shoes.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const Product = ({ productId }) => {
  return (
    <div>
      <div className="lg:flex">
        <img
          className="w-full block lg:w-2/5"
          src={product.image}
          alt={product.name}
        />
        <div className="lg:w-3/5 lg:pl-10">
          <h2 className="text-2xl text-gray-700 mb-3">{product.name}</h2>
          <div className="flex mb-5">
            <span className="text-lg text-gray-500 mr-5">${product.price}</span>
            <Quantity quantity={product.quantity} />
          </div>
          <p className="text-gray-500 mb-5">{`${product.quantity} remaining in stock`}</p>
          <p className="text-gray-500 mb-8">{product.description}</p>
          <div className="buttons flex">
            <button className="rounded py-2 px-4 capitalize mr-5 text-sm text-white bg-red-500 hover:bg-red-700 outline-none">
              delete product
              <Trash className="w-4 ml-2 inline-block" />
            </button>
            <button className="rounded py-2 px-4 capitalize text-sm text-white bg-blue-500 hover:bg-blue-700 outline-none">
              edit product
              <Edit className="w-4 ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
