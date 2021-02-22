import React from "react";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const SizeListItem = ({ item, deleteItem, editItem }) => {
  return (
    <div className="flex w-full md:w-1/2 lg:w-1/4 bg-blue-100 text-gray-700 rounded py-3 px-2 mb-5 md:mr-4 focus:bg-white focus:border focus:border-2 focus:border-gray-500">
      <p className="w-1/4 text-base md:text-sm font-bold">{`S: ${item.value}`}</p>
      <p className="w-1/4 text-base md:text-sm font-bold">{`Q: ${item.quantity}`}</p>
      <div className="flex w-1/2 self-center justify-end">
        <Edit
          className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
          title="View customer details"
          onClick={() => editItem(item)}
        />
        <Trash
          className="ml-6 w-5 h-5 lg:w-4 lg:h-4 lg:mr-2 text-gray-700 hover:text-red-500 cursor-pointer"
          title="Delete customer"
          onClick={() => deleteItem(item.size)}
        />
      </div>
    </div>
  );
};

export default SizeListItem;
