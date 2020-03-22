import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../../actions/products/productActions";

import { ReactComponent as Add } from "../../../assets/add.svg";

import ListItem from "./ListItem";

const ProductsList = ({ navigate }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.productsList);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <Link
          to="create"
          className="mb-12 border rounded text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 capitalize"
        >
          <Add className="inline-block w-4 h-4" /> new product
        </Link>
      </div>
      <div className="w-full">
        <div className="text-left hidden lg:flex py-3">
          <p className="pl-4 capitalize font-semibold w-3/12">photo</p>
          <p className="capitalize font-semibold w-3/12">name</p>
          <p className="capitalize font-semibold w-3/12">category</p>
          <p className="capitalize font-semibold w-2/12">unit price</p>
          <p className="px-4"></p>
        </div>
        {products.map(product => (
          <ListItem product={product} navigate={navigate} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
