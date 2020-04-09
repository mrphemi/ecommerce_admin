import React, { useState, useEffect } from "react";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import useRequestStatus from "../../../hooks/useRequestStatus";

import CustomerInfo from "./CustomerInfo";
import Spinner from "../../../components/spinner/Spinner";

const Details = ({ customerId }) => {
  const [customer, setCustomer] = useState({});
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();

  const getCustomer = async (customerId) => {
    try {
      requestInProgress();
      const customer = await baseUrl.get(`/customers/${customerId}`);
      const info = customer.data.result;
      setCustomer(info);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () => {
        setTimeout(() => {
          // Go back to customers list
          window.history.back();
        }, 500);
      });
    }
  };

  useEffect(() => {
    getCustomer(customerId);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return <CustomerInfo customer={customer} />;
};

export default Details;
