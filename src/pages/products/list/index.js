import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import baseUrl from "../../../helpers/api";

import { ReactComponent as Add } from "../../../assets/add.svg";

import ListItem from "./ListItem";
import Spinner from "../../../components/spinner/Spinner";

const ProductsList = ({ navigate }) => {
  const [products, setProducts] = useState([]);

  // Get product list
  const getProducts = async () => {
    try {
      const products = await baseUrl.get("/products");
      const productsList = products.data.products;
      setProducts(productsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
