import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";

import { setProducts } from "../../../actions/productsActions";
import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import useRequestStatus from "../../../hooks/useRequestStatus";

import { ReactComponent as Add } from "../../../assets/add.svg";

import ListItem from "./ListItem";
import Spinner from "../../../components/spinner/Spinner";
import EmptyList from "../../../components/EmptyList";
import Pagination from "../../../components/Pagination";

const ProductsList = ({ navigate }) => {
  const {
    isLoading,
    requestInProgress,
    requestSuccess,
    requestError,
  } = useRequestStatus();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  // Get product list
  const getProducts = async () => {
    try {
      requestInProgress();
      const products = await baseUrl.get("/products");
      const productsList = products.data.results;
      const productsMetaData = products.data.meta;
      dispatch(setProducts(productsMetaData, productsList));
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="flex justify-end">
        <Link to="create" className="mb-12 text-sm button">
          <Add className="inline-block w-4 h-4" /> new product
        </Link>
      </div>
      {products.length ? (
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
              {products.map((product) => (
                <ListItem
                  product={product}
                  navigate={navigate}
                  key={product._id}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyList listName="products" />
      )}

      {/* <Pagination /> */}
    </>
  );
};

export default ProductsList;
