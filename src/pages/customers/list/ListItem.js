import React, { useState } from "react";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as View } from "../../../assets/view.svg";

const ListItem = ({ customer }) => {
  return (
    <>
      <div className="mb-10 py-3 lg:mb-0 lg:flex justify-between border-l-4 border-blue-300 lg:border-transparent shadow-xl lg:shadow-sm lg:shadow-inner transform lg:hover:scale-y-110 hover:border-blue-300 hover:border-l-4">
        <div className="mb-4 lg:mb-0 px-4 capitalize font-medium lg:w-4/12">
          {customer.name}
        </div>
        <div className="mb-4 lg:mb-0 px-4 lg:w-4/12">{customer.email}</div>
        <div className="mb-4 lg:mb-0 px-4 lg:w-3/12">{customer.phone}</div>
        <div className="px-4 lg:w-1/12 flex lg:justify-between items-center">
          <Trash
            className="w-5 h-5 lg:w-4 lg:h-4 mr-4 lg:mr-0 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
          />
          <View
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
          />
        </div>
      </div>
    </>
  );
};

export default ListItem;
