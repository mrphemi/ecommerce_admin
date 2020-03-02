import React from "react";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";

import { ReactComponent as Hamburger } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/zap.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

const TopNav = ({ toggle }) => {
  const first_name = useSelector(state => state.auth.user.first_name);
  const last_name = useSelector(state => state.auth.user.last_name);
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

      <div className="ml-auto flex relative">
        <UserIcon className="text-gray-500 hover:text-white cursor-pointer" />
        {first_name && last_name && (
          <span className="text-white ml-2 capitalize">
            {first_name[0]}
            {last_name[0]}
          </span>
        )}
      </div>
    </nav>
  );
};

export default TopNav;
