import React, { useState, useRef } from "react";
import { Link, navigate } from "@reach/router";
import { useSelector, useDispatch } from "react-redux";
import ButterToast, { Cinnamon } from "butter-toast";

import setAuthToken from "../../helpers/setAuthToken";
import useClickOutside from "../../hooks/useClickOutside";
import { setCurrentUser } from "../../actions/auth/authActions";

import { ReactComponent as Hamburger } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/zap.svg";
import { ReactComponent as UserIcon } from "../../assets/user.svg";

const TopNav = ({ toggleSideNav }) => {
  const dispatch = useDispatch();
  const { first_name, last_name } = useSelector((state) => state.auth.user);
  const profileDropdownToggler = useRef(null);
  const sideNavToggler = useRef(null);

  useClickOutside(profileDropdownToggler, () => setShowDropDown(false));
  useClickOutside(sideNavToggler, () => toggleSideNav(false));

  // Sign authenticated user out
  const signOut = () => {
    // Remove token from local storage
    localStorage.removeItem("authToken");
    // Remove auth header for future requests
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    navigate("/login");
    ButterToast.raise({
      content: (
        <Cinnamon.Crisp
          scheme={Cinnamon.Crunch.SCHEME_BLUE}
          content={() => "Please Login to Continue"}
          title="Logged Out"
        />
      ),
    });
  };

  // dropdown state
  const [showDropDown, setShowDropDown] = useState(false);

  const toggleDropDown = () => {
    setShowDropDown((prevState) => !prevState);
  };

  // toggle side nav
  const handleToggleSideNav = () => {
    toggleSideNav((prevState) => !prevState);
  };
  return (
    <nav className="flex items-center h-12 px-4 bg-gray-800 sticky w-full top-0 z-20">
      <Hamburger
        className="text-gray-500 hover:text-white cursor-pointer"
        ref={sideNavToggler}
        onClick={handleToggleSideNav}
      />
      <Link className="text-blue-500 hover:text-blue-700 ml-3" to="/">
        <Logo />
      </Link>

      <div className="ml-auto relative w-2/3 md:w-1/4">
        <div
          className="flex cursor-pointer ml-auto w-1/5"
          onClick={toggleDropDown}
          ref={profileDropdownToggler}
        >
          <UserIcon className="text-white ml-auto" />
          {first_name && last_name && (
            <span className="text-white ml-2 capitalize">
              {first_name[0]}
              {last_name[0]}
            </span>
          )}
        </div>
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
            onClick={signOut}
          >
            logout
          </span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
