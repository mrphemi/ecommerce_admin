import { useState } from "react";

const useLoadingStatus = () => {
  const [loadingStatus, setLoadingStatus] = useState("");

  const isLoading = loadingStatus === "pending";

  const loadingInProgress = () => setLoadingStatus("pending");
  const successLoading = () => setLoadingStatus("resolved");
  const errorLoading = () => setLoadingStatus("error");

  return { isLoading, loadingInProgress, successLoading, errorLoading };
};

export default useLoadingStatus;
