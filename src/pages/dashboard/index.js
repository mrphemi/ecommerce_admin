import React from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";

import Nav from "../../components/dashboard/Nav";
import Products from "../products";
import ProductsList from "../products/list";
import CreateProduct from "../products/create/create";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="px-5 md:px-10 lg:px-16 py-5 md:py-10">
        <Router>
          <Products path="products">
            <ProductsList path="/" />
            <CreateProduct path="create" />
          </Products>
        </Router>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
