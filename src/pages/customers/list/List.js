import React from "react";

import customers from "./customers";
import ListItem from "./ListItem";

const List = ({ navigate }) => {
  return (
    <div className="w-full">
      <div className="text-left hidden lg:flex py-3">
        <p className="px-4 capitalize font-semibold w-4/12">name</p>
        <p className="px-4 capitalize font-semibold w-4/12">email</p>
        <p className="px-4 capitalize font-semibold w-2/12">phone</p>
        <p className="px-4"></p>
      </div>
      {customers.map(customer => (
        <ListItem customer={customer} navigate={navigate} key={customer.id} />
      ))}
    </div>
  );
};

export default List;
