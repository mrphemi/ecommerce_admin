import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import useRequestStatus from "../../../hooks/useRequestStatus";

import ListItem from "./ListItem";
import Spinner from "../../../components/spinner/Spinner";
import EmptyList from "../../../components/EmptyList";
import { ReactComponent as Add } from "../../../assets/add.svg";

const List = ({ navigate }) => {
  const [sizes, setSizes] = useState([]);
  const {
    isLoading,
    requestSuccess,
    requestError,
    requestInProgress,
  } = useRequestStatus();

  const getSizes = async () => {
    try {
      requestInProgress();
      const sizes = await baseUrl.get("/sizes");
      const sizesList = sizes.data.results;
      setSizes(sizesList);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getSizes();
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className="flex justify-end">
        <Link
          to="create"
          className="mb-12 border rounded text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 capitalize"
        >
          <Add className="inline-block w-4 h-4" /> new size
        </Link>
      </div>

      {sizes.length ? (
        <div className="md:grid grid-cols-3 lg:grid-cols-4 col-gap-5 row-gap-5">
          {sizes.map((size) => (
            <ListItem key={size._id} navigate={navigate} size={size} />
          ))}
        </div>
      ) : (
        <EmptyList listName="sizes" />
      )}
    </>
  );
};

export default List;
