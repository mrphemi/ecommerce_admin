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
//brands
import Brands from "../brands";
import BrandsList from "../brands/list";
import CreateBrand from "../brands/create";
import EditBrand from "../brands/edit";
// sizes
import Sizes from "../sizes";
import SizesList from "../sizes/list";
import CreateSize from "../sizes/create";
import EditSize from "../sizes/edit";
// profile
import Profile from "../profile";
import ProfilePage from "../profile/ProfilePage";
import EditProfile from "../profile/edit";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Nav />
      <div className="px-5 md:px-10 lg:px-16 xl:px-24 py-5 md:py-10 xl:py-16">
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

          <Brands path="brands">
            <BrandsList path="/" />
            <CreateBrand path="create" />
            <EditBrand path="edit/:brandId" />
          </Brands>

          <Sizes path="sizes">
            <SizesList path="/" />
            <CreateSize path="create" />
            <EditSize path="edit/:sizeId" />
          </Sizes>

          <Profile path="profile">
            <ProfilePage path="/" />
            <EditProfile path="edit" />
          </Profile>
        </Router>
      </div>
    </div>
  );
};

export default Dashboard;
