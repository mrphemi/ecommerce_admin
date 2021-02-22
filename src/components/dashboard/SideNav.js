import React from "react";
import { Link } from "@reach/router";

import { ReactComponent as ProductsIcon } from "../../assets/products.svg";
import { ReactComponent as CustomersIcon } from "../../assets/customers.svg";
import { ReactComponent as OrdersIcon } from "../../assets/cart.svg";
import { ReactComponent as CategoryIcon } from "../../assets/category.svg";
import { ReactComponent as SizeIcon } from "../../assets/anon.svg";
import { ReactComponent as BrandIcon } from "../../assets/anon.svg";

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
          to="orders"
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
          to="categories"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <CategoryIcon className="w-4 mr-2" />
          categories
        </Link>

        <Link
          to="sizes"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <SizeIcon className="w-4 mr-2" />
          sizes
        </Link>

        <Link
          to="brands"
          className="capitalize text-gray-600 hover:text-blue-400 text-sm py-4 flex items-center"
          onClick={close}
        >
          <BrandIcon className="w-4 mr-2" />
          brands
        </Link>
      </div>
    </nav>
  );
};

export default SideNav;
