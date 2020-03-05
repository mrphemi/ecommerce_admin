import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../actions/auth/authActions";

import { ReactComponent as Hamburger } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/zap.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

const TopNav = ({ toggle }) => {
  const dispatch = useDispatch();
  const first_name = useSelector(state => state.auth.user.first_name);
  const last_name = useSelector(state => state.auth.user.last_name);

  // Sign authenticated user out
  const signout = () => {
    dispatch(logout(navigate));
  };

  // dropdown state
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown(prev => !prev);
  };

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
      <Link className="text-blue-500 hover:text-blue-700 ml-3" to="/">
        <Logo />
      </Link>

      <div className="ml-auto flex relative w-2/3 md:w-1/4">
        <UserIcon
          className="text-gray-500 hover:text-white cursor-pointer ml-auto"
          onClick={toggleDropDown}
        />
        {first_name && last_name && (
          <span className="text-white ml-2 capitalize">
            {first_name[0]}
            {last_name[0]}
          </span>
        )}
        <div
          className={`drop-down absolute top-8 -right-2 shadow-md px-5 py-4 bg-white rounded ${
            showDropDown ? "block" : "hidden"
          }`}
        >
          <Link to="profile" className="capitalize block hover:text-blue-300">
            view profile
          </Link>
          <span
            className="capitalize block mt-3 cursor-pointer hover:text-blue-300"
            onClick={signout}
          >
            logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
