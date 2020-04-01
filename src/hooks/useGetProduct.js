import { useEffect, useState } from "react";

import baseUrl from "../helpers/api";
import handleRequestError from "../helpers/handleRequestError";
import useLoadingStatus from "./useLoadingStatus";

const useGetProduct = productId => {
  const [product, setProduct] = useState({});
  const {
    isLoading,
    loadingInProgress,
    successLoading,
    errorLoading
  } = useLoadingStatus();

  // Get single product info.
  const getProduct = async () => {
    try {
      loadingInProgress();
      const product = await baseUrl.get(`/products/${productId}`);
      const productDetails = product.data.product;
      setProduct(productDetails);
      successLoading();
    } catch (error) {
      errorLoading();
      handleRequestError(error, () =>
        setTimeout(() => {
          window.history.back();
        }, 500)
      );
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return { product, isLoading };
};

export default useGetProduct;
