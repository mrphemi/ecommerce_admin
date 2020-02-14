import React, { useState } from "react";

import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <SideNav isOpen={isOpen} />
      <TopNav toggle={setIsOpen} />
    </>
  );
};

export default Nav;
