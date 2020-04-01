import React, { useState, useEffect } from "react";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import useLoadingStatus from "../../../hooks/useLoadingStatus";

import Spinner from "../../../components/spinner/Spinner";
import ListItem from "./ListItem";

const List = ({ navigate }) => {
  const [customers, setCustomers] = useState([]);
  const {
    isLoading,
    loadingInProgress,
    successLoading,
    errorLoading
  } = useLoadingStatus();

  const getCustomers = async () => {
    try {
      loadingInProgress();
      const customers = await baseUrl.get("/customers");
      const list = customers.data.customers;
      setCustomers(list);
      successLoading();
    } catch (error) {
      errorLoading();
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="table-fixed mx-auto">
        <thead className="text-left bg-gray-100">
          <tr>
            <th className="w-1/3 px-4 py-4 capitalize">name</th>
            <th className="w-1/3 px-4 py-4 capitalize">email</th>
            <th className="w-1/4 px-4 py-4 capitalize">phone.no</th>
            <th className="w-1/6 px-4 py-4 capitalize"></th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <ListItem
              customer={customer}
              navigate={navigate}
              key={customer._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
