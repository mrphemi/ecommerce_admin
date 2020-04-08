import React from "react";
import ButterToast, { Cinnamon } from "butter-toast";
import { navigate } from "@reach/router";

function isCallbackFunction(cb) {
  if (cb && typeof cb === "function") {
    cb();
  } else {
    return;
  }
}

function isServerError() {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        scheme={Cinnamon.Crisp.SCHEME_RED}
        content="Something went wrong. Please refresh and try again"
        title="Error"
      />
    )
  });
}

function isUnauthorizedError() {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        scheme={Cinnamon.Crisp.SCHEME_BLUE}
        content="Please login to continue"
        title="Error"
      />
    )
  });
}

function handleRequestError(error, cb) {
  if (error.response) {
    if (error.response.status >= 500) {
      isServerError();
      isCallbackFunction(cb);
    } else if (error.response.status === 401) {
      isUnauthorizedError();
      navigate("/login");
    } else {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            scheme={Cinnamon.Crisp.SCHEME_RED}
            content={() => error.response.data.error}
            title="Error"
          />
        )
      });
      isCallbackFunction(cb);
    }
  }
}

export default handleRequestError;
