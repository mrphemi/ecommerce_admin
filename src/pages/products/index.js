import React from "react";
import Nav from "./Nav";

const Products = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Products;
