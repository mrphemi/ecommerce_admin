import React from "react";
import { Link } from "@reach/router";

import ListItem from "./ListItem";
import { ReactComponent as Add } from "../../../assets/add.svg";

import categories from "./categories";

const List = ({ navigate }) => {
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
          <ListItem key={category.id} navigate={navigate} category={category} />
        ))}
      </div>
    </>
  );
};

export default List;
