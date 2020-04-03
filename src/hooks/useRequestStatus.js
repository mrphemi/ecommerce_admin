import { useState } from "react";

const useRequestStatus = () => {
  const [requestStatus, setRequestStatus] = useState("");

  const isLoading = requestStatus === "pending";

  const requestInProgress = () => setRequestStatus("pending");
  const requestSuccess = () => setRequestStatus("resolved");
  const requestError = () => setRequestStatus("error");

  return { isLoading, requestInProgress, requestSuccess, requestError };
};

export default useRequestStatus;
