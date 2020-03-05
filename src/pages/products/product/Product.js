import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSingleProduct } from "../../../actions/products/productActions";

import Quantity from "./Quantity";
import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const Product = ({ productId }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  const { image, name, quantity, price, description } = product;

  return (
    <>
      {Object.keys(product).length > 0 && (
        <div className="lg:flex">
          <img
            className="w-full block lg:w-2/5 lg:h-1/2 xxl:h-1/4"
            src={image}
            alt={name}
          />
          <div className="lg:w-3/5 lg:pl-10">
            <h2 className="text-2xl text-gray-700 font-bold mb-3">{name}</h2>
            <div className="flex mb-5">
              <span className="text-lg text-gray-500 mr-5">${price}</span>
              <Quantity quantity={quantity} />
            </div>
            <div className="mb-8">
              <h2 className="capitalize text-gray-700 font-medium text-xl mb-3">
                product description
              </h2>
              <p className="text-gray-500">{description}</p>
            </div>
            <div className="buttons md:flex">
              <button className="rounded py-2 px-4 capitalize mr-5 mb-5 md:mb-0 text-white bg-red-500 hover:bg-red-700 outline-none flex">
                delete product
                <Trash className="w-4 ml-2" />
              </button>
              <button className="rounded py-2 px-4 capitalize text-white bg-blue-500 hover:bg-blue-700 outline-none flex">
                edit product
                <Edit className="w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
