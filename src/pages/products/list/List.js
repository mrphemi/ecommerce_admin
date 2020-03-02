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
          <Add className="inline-block w-4 h-4" />
          new product
        </Link>
      </div>

      <div className="list grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map(product => (
          <ListItem product={product} navigate={navigate} key={product._id} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
