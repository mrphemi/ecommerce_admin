import React from "react";
import { Link } from "@reach/router";

import cartIcon from "../../assets/cart-white.png";
import { ReactComponent as ProductsIcon } from "../../assets/products.svg";
import { ReactComponent as CustomersIcon } from "../../assets/customers.svg";
import { ReactComponent as OrdersIcon } from "../../assets/orders.svg";

const SideNav = () => {
  return (
    <nav className="xl:w-1/6 xl:h-screen border-r border-gray-200">
      <div className="flex justify-between border-b border-gray-200 p-4">
        <img className="w-5" src={cartIcon} alt="cart logo" />
      </div>
      <div className="px-4">
        <Link
          to="products"
          className="capitalize text-gray-600 text-sm hover:text-blue-400 py-4 flex items-center"
        >
          <ProductsIcon className="w-4 mr-2" />
          products
        </Link>
        <Link
          to="/"
          className="capitalize text-gray-600 text-sm hover:text-blue-400 py-4 flex items-center"
        >
          <OrdersIcon className="w-4 mr-2" />
          orders
        </Link>
        <Link
          to="/"
          className="capitalize text-gray-600 text-sm hover:text-blue-400 py-4 flex items-center"
        >
          <CustomersIcon className="w-4 mr-2" />
          customers
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
