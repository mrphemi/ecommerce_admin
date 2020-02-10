import React from "react";
import PropTypes from "prop-types";
import { Router } from "@reach/router";

import SideNav from "../../components/dashboard/SideNav";
import Products from "../products";
import ProductsList from "../products/list";
import CreateProduct from "../products/create/create";

const Dashboard = () => {
  return (
    <div className="xl:flex">
      <SideNav />
      <div className="px-5 md:px-10 py-5 md:py-10 xl:w-5/6 xl:h-screen overflow-y-scroll">
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
