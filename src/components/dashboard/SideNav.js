import React from "react";
import { Link } from "@reach/router";

import { ReactComponent as ProductsIcon } from "../../assets/products.svg";
import { ReactComponent as CustomersIcon } from "../../assets/customers.svg";
import { ReactComponent as OrdersIcon } from "../../assets/cart.svg";
import { ReactComponent as CategoryIcon } from "../../assets/category.svg";

const SideNav = ({ isOpen, setIsOpen }) => {
  // close nav when a link is closed
  const close = () => {
    setIsOpen(false);
  };
  return (
    <nav
      className={`fixed left-0 top-12 w-2/3 md:w-1/4 z-10 h-full xl:w-1/6 xl:h-screen bg-gray-900 transition-translate duration-500 ease-in-out ${
        isOpen ? "transform translate-x-0" : "transform -translate-x-full"
      }`}
    >
      <div className="px-4">
        <Link
          to="products"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <ProductsIcon className="w-4 mr-2" />
          products
        </Link>
        <Link
          to="/"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <OrdersIcon className="w-4 mr-2" />
          orders
        </Link>
        <Link
          to="customers"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <CustomersIcon className="w-4 mr-2" />
          customers
        </Link>

        <Link
          to="/"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <CategoryIcon className="w-4 mr-2" />
          categories
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
