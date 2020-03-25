import { useEffect, useState } from "react";

import baseUrl from "../helpers/api";

const useGetProduct = productId => {
  const [product, setProduct] = useState({});

  // Get single product info.
  const getProduct = async () => {
    try {
      const product = await baseUrl.get(`/products/${productId}`);
      const productDetails = product.data.product;
      setProduct(productDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return product;
};

export default useGetProduct;
