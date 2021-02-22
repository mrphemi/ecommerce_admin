import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { useSelector } from "react-redux";

import baseUrl from "../../helpers/api";
import handleRequestError from "../../helpers/handleRequestError";
import useRequestStatus from "../../hooks/useRequestStatus";

import Spinner from "../../components/spinner/Spinner";
import ProfileInfo from "./ProfileInfo";

import { ReactComponent as Edit } from "../../assets/edit.svg";

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const authUser = useSelector((state) => state.auth.user);
  const {
    isLoading,
    requestInProgress,
    requestError,
    requestSuccess,
  } = useRequestStatus();
  const getProfile = async (userId) => {
    try {
      requestInProgress();
      const user = await baseUrl.get(`/users/${userId}`);
      const info = user.data.result;
      setUser(info);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () => {
        setTimeout(() => {
          window.history.back();
        }, 500);
      });
    }
  };

  useEffect(() => {
    getProfile(authUser.id);
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="edit"
          className="mb-12 border rounded text-white text-sm bg-blue-500 hover:bg-blue-700 py-2 px-4 capitalize"
        >
          <Edit className="inline-block w-4 h-4" /> edit profile
        </Link>
      </div>{" "}
      <ProfileInfo user={user} />
    </div>
  );
};

export default ProfilePage;
