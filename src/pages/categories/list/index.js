import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import baseUrl from "../../../helpers/api";
import handleRequestError from "../../../helpers/handleRequestError";
import useLoadingStatus from "../../../hooks/useLoadingStatus";

import Spinner from "../../../components/spinner/Spinner";
import ListItem from "./ListItem";
import { ReactComponent as Add } from "../../../assets/add.svg";

const List = ({ navigate }) => {
  const [categories, setCategories] = useState([]);
  const {
    isLoading,
    successLoading,
    errorLoading,
    loadingInProgress
  } = useLoadingStatus();

  const getCategories = async () => {
    try {
      loadingInProgress();
      const categories = await baseUrl.get("/categories");
      const categoriesList = categories.data.categories;
      setCategories(categoriesList);
      successLoading();
    } catch (error) {
      errorLoading();
      handleRequestError(error, null);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="flex justify-end">
        <Link
          to="create"
          className="mb-12 border rounded text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 capitalize"
        >
          <Add className="inline-block w-4 h-4" /> new category
        </Link>
      </div>
      <div className="md:grid grid-cols-3 lg:grid-cols-4  col-gap-5 row-gap-5">
        {categories.map(category => (
          <ListItem
            key={category._id}
            navigate={navigate}
            category={category}
          />
        ))}
      </div>
    </>
  );
};

export default List;
