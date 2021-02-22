import React from "react";

const ProfileInfo = ({ user }) => {
  return (
    <div>
      <div className="personal mb-8">
        <h1 className="font-black text-xl uppercase mb-5">personal</h1>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="name">
            <h2 className="font-semibold capitalize">full name</h2>
            <p>
              {user.first_name} {user.last_name}
            </p>
          </div>
          <div className="email">
            <h2 className="font-semibold capitalize">email</h2>
            <p>{user.email}</p>
          </div>
          <div className="phone">
            <h2 className="font-semibold capitalize">phone</h2>
            <p className="capitalize">{user.phone || "not available"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
