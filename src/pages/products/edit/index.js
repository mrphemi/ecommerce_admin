import React from "react";
import { Formik } from "formik";

import baseUrl from "../../../helpers/api";
import handleHttpSuccess from "../../../helpers/handleRequestSuccess";
import handleHttpError from "../../../helpers/handleRequestError";
import useGetProduct from "../../../hooks/useGetProduct";

import { EditProductSchema } from "../../../helpers/validation";

import Form from "../form/ProductForm";
import Spinner from "../../../components/spinner/Spinner";

const EditProduct = ({ navigate, productId }) => {
  const { product: productInfo, isLoading } = useGetProduct(productId);

  const editProduct = async (productId, formData) => {
    try {
      await baseUrl.put(`/products/${productId}`, formData);
      handleHttpSuccess("Product Updated Successfully", () =>
        setTimeout(() => {
          navigate(`/dashboard/products/${productId}`);
        }, 500),
      );
    } catch (error) {
      handleHttpError(error, null);
    }
  };

  const initialValues = {
    name: productInfo?.name ?? "",
    price: productInfo?.price ?? "",
    description: productInfo?.description ?? "",
    category: productInfo.category?._id ?? "",
    brand: productInfo.brand?._id ?? "",
    productImg: null,
    availableSizes:
      productInfo?.availableSizes?.map((x) => ({
        quantity: x.quantity,
        size: x.size._id,
        value: x.size.size,
      })) ?? [],
  };

  const handleSubmit = (values) => {
    const form = new FormData();
    form.append("name", values.name);
    form.append("category", values.category);
    form.append("description", values.description);
    form.append("price", parseFloat(values.price));
    form.append("brand", values.brand);
    form.append("product_img", values.product_img);
    let sizes = values.availableSizes.map((size) => ({
      size: size.size,
      quantity: size.quantity,
    }));
    form.append("availableSizes", JSON.stringify(sizes));
    editProduct(productId, form);
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <h1 className="capitalize text-xl mb-10 font-bold text-gray-700">
        edit product details
      </h1>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={EditProductSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            role="edit"
            form={{
              handleSubmit,
              isSubmitting,
            }}
          />
        )}
      </Formik>
    </>
  );
};

export default EditProduct;
