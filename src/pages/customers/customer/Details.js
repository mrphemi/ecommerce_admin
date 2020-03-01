import React from "react";

import customer from "./customer";

const Details = ({ customerId }) => {
  return (
    <div>
      <div className="personal mb-8">
        <h1 className="font-black text-xl uppercase mb-5 text-blue-500">
          personal
        </h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="name">
            <h2 className="font-semibold capitalize text-blue-500">
              full name
            </h2>
            <p>{customer.full_name}</p>
          </div>
          <div className="email">
            <h2 className="font-semibold capitalize text-blue-500">email</h2>
            <p>{customer.email}</p>
          </div>
          <div className="phone">
            <h2 className="font-semibold text-blue-500 capitalize">phone</h2>
            <p>{customer.phone}</p>
          </div>
          <div className="phone2">
            <h2 className="font-semibold text-blue-500 capitalize">phone 2</h2>
            <p>{customer.phone_2}</p>
          </div>
        </div>
      </div>

      <div className="address">
        <h1 className="font-black text-xl uppercase mb-5 text-blue-500">
          address
        </h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="street">
            <h2 className="font-semibold capitalize text-blue-500">street</h2>
            <p>{customer.address.street}</p>
          </div>
          <div className="city">
            <h2 className="font-semibold capitalize text-blue-500">city</h2>
            <p className="capitalize">{customer.address.city}</p>
          </div>
          <div className="zip">
            <h2 className="font-semibold capitalize text-blue-500">zip code</h2>
            <p>{customer.address.zip_code}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
