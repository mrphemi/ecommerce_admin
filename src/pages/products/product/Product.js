import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSingleProduct,
  cleanSingleProduct
} from "../../../actions/products/productActions";

import Spinner from "../../../components/spinner/Spinner";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const Product = ({ productId, navigate }) => {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(getSingleProduct(productId));
    return () => {
      dispatch(cleanSingleProduct());
    };
  }, [dispatch, productId]);

  // navigate to product edit page
  const edit = id => navigate(`/dashboard/products/edit/${id}`);

  const { image, name, quantity, price, description } = product;

  if (!Object.keys(product).length) {
    return <Spinner />;
  }
  return (
    <>
      <div className="lg:flex">
        <img
          className="block w-2/3 md:1/2 m-auto lg:m-0 lg:w-2/5 lg:h-1/2 xxl:h-1/4"
          src={image}
          alt={name}
        />
        <div className="lg:w-3/5 lg:pl-10 text-center lg:text-left">
          <h2 className="text-2xl text-gray-700 font-bold mb-3">{name}</h2>
          <p className="text-lg text-gray-500 mb-2">${price}</p>
          <p className="text-gray-500 text-sm mb-5">{`${quantity} items in stock`}</p>
          <div className="mb-8">
            <h2 className="capitalize text-gray-700 font-semibold text-lg mb-3">
              product description
            </h2>
            <p className="text-gray-500 md:w-4/5 md:m-auto lg:w-auto">
              {description}
            </p>
          </div>
          <div className="buttons flex justify-center lg:justify-start">
            <button className="rounded py-2 px-4 mr-5 capitalize text-white bg-red-500 hover:bg-red-700 outline-none flex text-sm sm:text-base">
              delete product
              <Trash className="w-4 ml-2" />
            </button>
            <button
              className="rounded py-2 px-4 capitalize text-white bg-blue-500 hover:bg-blue-700 outline-none flex text-sm sm:text-base"
              onClick={() => edit(productId)}
            >
              edit product
              <Edit className="w-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
