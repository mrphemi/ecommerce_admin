import React from "react";
import { Link } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const metaData = useSelector((state) => state.products.meta);

  return (
    <nav className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="hidden sm:block">
        <p className="text-sm leading-5 text-gray-700">
          <span className="font-medium">Showing 1 to </span>
          <span className="font-medium">10 - </span>
          <span className="font-medium">20 results</span>
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <Link
          to="/"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Previous
        </Link>
        <Link
          to="/"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
        >
          Next
        </Link>
      </div>
    </nav>
  );
};

export default Pagination;
