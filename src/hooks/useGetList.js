import { useEffect, useState } from "react";

import baseUrl from "../helpers/api";
import handleRequestError from "../helpers/handleRequestError";
import useRequestStatus from "./useRequestStatus";

const useGetList = (endPoint) => {
  const [list, setList] = useState([]);
  const {
    isLoading,
    requestInProgress,
    requestSuccess,
    requestError,
  } = useRequestStatus();

  const getList = async () => {
    try {
      requestInProgress();
      const apiCall = await baseUrl.get(`/${endPoint}`);
      const results = apiCall.data.results;
      setList(results);
      requestSuccess();
    } catch (error) {
      requestError();
      handleRequestError(error, () =>
        setTimeout(() => {
          window.history.back();
        }, 500),
      );
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return { list, isLoading };
};

export default useGetList;
