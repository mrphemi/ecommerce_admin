import React from "react";
import PropTypes from "prop-types";
import swal from "@sweetalert/with-react";

import baseUrl from "../../../helpers/api";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import handleRequestError from "../../../helpers/handleRequestError";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";

const ListItem = ({ size, navigate }) => {
  const edit = (sizeId) => {
    navigate(`edit/${sizeId}`);
  };

  const deleteSize = async (sizeId) => {
    const confirmDeletion = await swal({
      title: "Hold on?",
      text: "Are you sure you want to proceed",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (confirmDeletion) {
      try {
        await baseUrl.delete(`/sizes/${sizeId}`);
        handleRequestSuccess("Size Deleted Successfully", () =>
          setTimeout(() => {
            window.location.reload();
          }, 500),
        );
      } catch (error) {
        handleRequestError(error, null);
      }
    }
  };

  return (
    <div className="text-md text-gray-700 px-3 py-3 mb-8 md:mb-0 border-l-4 border-blue-500 shadow-lg flex justify-between items-center">
      <p>{size.size}</p>
      <div className="flex">
        <Trash
          className="w-5 h-5 lg:w-4 lg:h-4 mr-3 text-gray-700 hover:text-red-500 cursor-pointer"
          title="Delete size"
          onClick={() => deleteSize(size._id)}
        />
        <Edit
          className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
          title="Edit size"
          onClick={() => edit(size._id)}
        />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  size: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ListItem;
