import React from "react";
import NavLink from "../../components/Links/NavLink";

const links = [
  {
    title: "product list",
    url: ""
  },
  {
    title: "new product",
    url: "create"
  }
];

const Nav = () => {
  return (
    <ul className="flex mb-10">
      {links.map(link => (
        <li className="mr-3" key={link.title}>
          <NavLink
            className="inline-block border border-blue-500 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white py-1 px-3 capitalize"
            to={link.url}
          >
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
