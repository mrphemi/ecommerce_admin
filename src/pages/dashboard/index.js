import React from "react";
import { Router } from "@reach/router";

import Nav from "../../components/dashboard/Nav";
// products
import Products from "../products";
import ProductsList from "../products/list/List";
import CreateProduct from "../products/create/Create";
import EditProduct from "../products/edit/Edit";
import ProductInfo from "../products/product/Product";
// customers
import Customers from "../customers";
import CustomersList from "../customers/list/List";
// categories
import Categories from "../categories";
import CategoriesList from "../categories/list/List";
import CreateCategory from "../categories/create/Create";
import EditCategory from "../categories/edit/Edit";

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
