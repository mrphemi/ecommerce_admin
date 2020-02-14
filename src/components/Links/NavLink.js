import React from "react";
import { Link } from "@reach/router";

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? {
        className: `inline-block border border-blue-500 rounded-full py-2 px-3 text-white text-sm bg-blue-500 capitalize`
      }
    : null;
};

const NavLink = props => <Link getProps={isActive} {...props} />;

export default NavLink;
