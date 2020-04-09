import React from "react";

const CustomerInfo = ({ customer }) => {
  return (
    <>
      <div className="personal mb-8">
        <h1 className="font-black text-xl uppercase mb-5">personal</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="name">
            <h2 className="font-semibold capitalize">full name</h2>
            <p>
              {customer.first_name} {customer.last_name}
            </p>
          </div>
          <div className="email">
            <h2 className="font-semibold capitalize">email</h2>
            <p>{customer.email}</p>
          </div>
          <div className="phone">
            <h2 className="font-semibold capitalize">phone</h2>
            <p>{customer.phone || 5555555}</p>
          </div>
          <div className="phone2">
            <h2 className="font-semibold capitalize">phone 2</h2>
            <p>{customer.phone_2 || 5555555}</p>
          </div>
        </div>
      </div>

      <div className="address">
        <h1 className="font-black text-xl uppercase mb-5">address</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="street">
            <h2 className="font-semibold capitalize">street</h2>
            <p>Street</p>
          </div>
          <div className="city">
            <h2 className="font-semibold capitalize">city</h2>
            <p className="capitalize">City</p>
          </div>
          <div className="zip">
            <h2 className="font-semibold capitalize">zip code</h2>
            <p>Zip</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
