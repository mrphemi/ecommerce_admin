import React from "react";
import { Link } from "@reach/router";

import { ReactComponent as Hamburger } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/zap.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

const TopNav = ({ toggle }) => {
  // toggle side nav
  const toggleSideNav = () => {
    toggle(prevState => !prevState);
  };
  return (
    <nav className="flex items-center h-12 px-4 bg-gray-800 sticky w-full top-0 z-20">
      <Hamburger
        className="text-gray-500 hover:text-white cursor-pointer"
        onClick={toggleSideNav}
      />
      <Link className="text-blue-500 hover:text-blue-700 ml-3" to="">
        <Logo />
      </Link>

      <UserIcon className="text-gray-500 hover:text-white ml-auto" />
    </nav>
  );
};

export default TopNav;
