import React from "react";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as View } from "../../../assets/view.svg";

const ListItem = ({ customer, navigate }) => {
  const viewInfo = customerId => {
    navigate(`info/${customerId}`);
  };

  return (
    <tr className="shadow-sm shadow-inner">
      <td className="w-1/3 px-4 py-3">
        {customer.first_name} {customer.last_name}
      </td>
      <td className="w-1/3 px-4 py-3">{customer.email}</td>
      <td className="w-1/4 px-4 py-3 capitalize">
        {customer.phone ? customer.phone : "not provided"}
      </td>
      <td className="w-1/6 px-4 py-3">
        <div className="flex">
          <Trash
            className="w-5 h-5 lg:w-4 lg:h-4 mr-4 lg:mr-0 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
          />
          <View
            className="ml-4 w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => viewInfo(customer._id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default ListItem;
