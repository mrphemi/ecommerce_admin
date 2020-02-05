import React from "react";
import { Link } from "@reach/router";

const TopNav = () => {
  return (
    <nav className="w-1/3 my-4 mx-auto flex justify-around">
      <Link to="/" className="text-red-500">
        Home
      </Link>
      <Link to="/admin" className="text-red-500">
        Admin
      </Link>
      <Link to="/admin/register" className="text-red-500">
        Register
      </Link>
    </nav>
  );
};

export default TopNav;
