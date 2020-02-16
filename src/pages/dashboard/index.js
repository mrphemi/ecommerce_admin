import React from "react";
import { Router } from "@reach/router";

import Nav from "../../components/dashboard/Nav";
import Products from "../products";
import ProductsList from "../products/list/List";
import CreateProduct from "../products/create/Create";
import EditProduct from "../products/edit/Edit";

import ProductInfo from "../products/product/Product";

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
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
