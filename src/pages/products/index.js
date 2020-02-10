import React from "react";
import NavLink from "../../components/Links/NavLink";

const Products = ({ children }) => (
  <>
    <ul className="flex mb-10">
      <li className="mr-3">
        <NavLink
          className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 capitalize"
          to=""
        >
          products list
        </NavLink>
      </li>
      <li className="mr-3">
        <NavLink
          className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3 capitalize"
          to="create"
        >
          create
        </NavLink>
      </li>
    </ul>
    {children}
  </>
);

export default Products;
