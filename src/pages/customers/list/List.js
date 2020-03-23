import React from "react";

import customers from "./customers";
import ListItem from "./ListItem";

const List = ({ navigate }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table-fixed mx-auto">
        <thead className="text-left bg-gray-100">
          <tr>
            <th className="w-1/3 px-4 py-4 capitalize">name</th>
            <th className="w-1/3 px-4 py-4 capitalize">email</th>
            <th className="w-1/4 px-4 py-4 capitalize">phone.no</th>
            <th className="w-1/6 px-4 py-4 capitalize"></th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <ListItem
              customer={customer}
              navigate={navigate}
              key={customer.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
