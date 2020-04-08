import { useEffect, useState } from "react";

import baseUrl from "../helpers/api";
import handleRequestError from "../helpers/handleRequestError";
import useRequestStatus from "./useRequestStatus";

const useGetProduct = (productId) => {
  const [product, setProduct] = useState({});
  const {
    isLoading,
    requestInProgress,
    requestSuccess,
    requestError,
  } = useRequestStatus();

  // Get single product info.
  const getProduct = async () => {
    try {
      requestInProgress();
      const product = await baseUrl.get(`/products/${productId}`);
      const productDetails = product.data.result;
      setProduct(productDetails);
      requestSuccess();
    } catch (error) {
      requestError();
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
