import React from "react";
import swal from "@sweetalert/with-react";

import baseUrl from "../../../helpers/api";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const ListItem = ({ category, navigate }) => {
  const edit = categoryId => {
    navigate(`edit/${categoryId}`);
  };

  const deleteCategory = async categoryId => {
    const confirmDeletion = await swal({
      title: "Hold on?",
      text: "Are you sure you want to proceed",
      icon: "warning",
      buttons: true,
      dangerMode: true
    });

    if (confirmDeletion) {
      try {
        await baseUrl.delete(`/categories/${categoryId}`);
        swal("Category successfully deleted", {
          icon: "success"
        });
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="text-md text-gray-700 px-3 py-3 mb-8 md:mb-0 border-l-4 border-blue-500 shadow-lg flex justify-between items-center">
      <p>{category.name}</p>
      <div className="flex">
        <Trash
          className="w-5 h-5 lg:w-4 lg:h-4 mr-3 text-gray-700 hover:text-red-500 cursor-pointer"
          title="Delete customer"
          onClick={() => deleteCategory(category._id)}
        />
        <Edit
          className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
          title="View customer details"
          onClick={() => edit(category._id)}
        />
      </div>
    </div>
  );
};

export default ListItem;
