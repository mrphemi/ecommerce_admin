import React from "react";
import PropTypes from "prop-types";
import swal from "@sweetalert/with-react";

import baseUrl from "../../../helpers/api";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as Edit } from "../../../assets/edit.svg";
import { ReactComponent as View } from "../../../assets/view.svg";

const ListItem = ({ product, navigate }) => {
  const edit = productId => {
    navigate(`edit/${productId}`);
  };

  const deleteProduct = async productId => {
    const confirmDeletion = await swal({
      title: "Hold on?",
      text: "Are you sure you want to proceed",
      icon: "warning",
      buttons: true,
      dangerMode: true
    });

    if (confirmDeletion) {
      try {
        await baseUrl.delete(`/products/${productId}`);
        swal("Product successfully deleted", {
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

  const viewInfo = productId => {
    navigate(`${productId}`);
  };

  return (
    <tr className="shadow-sm shadow-inner text-gray-700">
      <td className="w-1/6 px-4 py-2">
        <img className="w-10 h-10" src={product.image} alt={product.name} />
      </td>
      <td className="w-1/4 px-4 py-2">{product.name}</td>
      <td className="w-1/4 px-4 py-2">{product.category.name}</td>
      <td className="w-1/4 px-4 py-2">{product.price}</td>
      <td className="w-1/4 px-4 py-2">
        <div className="flex">
          <View
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => viewInfo(product._id)}
          />
          <Edit
            className="ml-6 w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => edit(product._id)}
          />
          <Trash
            className="ml-6 w-5 h-5 lg:w-4 lg:h-4 lg:mr-4 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
            onClick={() => deleteProduct(product._id)}
          />
        </div>
      </td>
    </tr>
  );
};

export default ListItem;

ListItem.propTypes = {
  navigate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};
