import React from "react";
import PropTypes from "prop-types";
import swal from "@sweetalert/with-react";

import baseUrl from "../../../helpers/api";
import handleRequestSuccess from "../../../helpers/handleRequestSuccess";
import handleRequestError from "../../../helpers/handleRequestError";

import { ReactComponent as Trash } from "../../../assets/trash.svg";
import { ReactComponent as View } from "../../../assets/view.svg";

const ListItem = ({ customer, navigate }) => {
  const viewInfo = (customerId) => {
    navigate(`info/${customerId}`);
  };

  const deleteCustomer = async (customerId) => {
    const confirmDeletion = await swal({
      title: "Hold on?",
      text: "Are you sure you want to proceed",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (confirmDeletion) {
      try {
        await baseUrl.delete(`/users/${customerId}`);
        handleRequestSuccess("Customer Deleted Successfully", () =>
          setTimeout(() => {
            window.location.reload();
          }, 500)
        );
      } catch (error) {
        handleRequestError(error, null);
      }
    }
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
          <View
            className="w-5 h-5 lg:w-4 lg:h-4 text-gray-700 hover:text-blue-500 cursor-pointer"
            title="View customer details"
            onClick={() => viewInfo(customer._id)}
          />
          <Trash
            className="ml-4 w-5 h-5 lg:w-4 lg:h-4 mr-4 lg:mr-0 text-gray-700 hover:text-red-500 cursor-pointer"
            title="Delete customer"
            onClick={() => deleteCustomer(customer._id)}
          />
        </div>
      </td>
    </tr>
  );
};

ListItem.propTypes = {
  customer: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default ListItem;
