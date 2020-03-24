import React from "react";
import { Router } from "@reach/router";

import Nav from "../../components/dashboard/Nav";
// products
import Products from "../products";
import ProductsList from "../products/list";
import CreateProduct from "../products/create";
import EditProduct from "../products/edit";
import ProductInfo from "../products/product";
// customers
import Customers from "../customers";
import CustomersList from "../customers/list";
import CustomerDetails from "../customers/customer";
// categories
import Categories from "../categories";
import CategoriesList from "../categories/list";
import CreateCategory from "../categories/create";
import EditCategory from "../categories/edit";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="px-5 md:px-10 lg:px-16 xl:px-24 py-5 md:py-10">
        <Router>
          <Products path="products">
            <ProductsList path="/" />
            <CreateProduct path="create" />
            <EditProduct path="edit/:productId" />
            <ProductInfo path=":productId" />
          </Products>

          <Customers path="customers">
            <CustomersList path="/" />
            <CustomerDetails path="info/:customerId" />
          </Customers>

          <Categories path="categories">
            <CategoriesList path="/" />
            <CreateCategory path="create" />
            <EditCategory path="edit/:categoryId" />
          </Categories>
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
