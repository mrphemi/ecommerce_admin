import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";

import { getProducts } from "../../../actions/products/productActions";

import { ReactComponent as Add } from "../../../assets/add.svg";

import ListItem from "./ListItem";
import Spinner from "../../../components/spinner/Spinner";

const ProductsList = ({ navigate }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.productsList);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (!products.length) {
    return <Spinner />;
  }

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
      <div className="w-full overflow-x-auto">
        <table className="table-fixed">
          <thead className="text-left bg-gray-100">
            <tr>
              <th className="w-1/6 px-4 py-4 capitalize">photo</th>
              <th className="w-1/4 px-4 py-4 capitalize">name</th>
              <th className="w-1/4 px-4 py-4 capitalize">category</th>
              <th className="w-1/4 px-4 py-4 capitalize">unit price</th>
              <th className="w-1/4 px-4 py-4 capitalize"></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ListItem
                product={product}
                navigate={navigate}
                key={product._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsList;
