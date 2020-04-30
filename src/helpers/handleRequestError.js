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

function ServerError() {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        scheme={Cinnamon.Crisp.SCHEME_RED}
        content="Something went wrong. Please refresh and try again"
        title="Error"
      />
    ),
  });
}

function UnauthorizedError(message) {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        scheme={Cinnamon.Crisp.SCHEME_RED}
        content={message}
        title="Error"
      />
    ),
  });
}

function handleRequestError(error, cb) {
  if (error.response) {
    if (error.response.status >= 500) {
      ServerError();
      isCallbackFunction(cb);
    } else if (error.response.status === 401) {
      UnauthorizedError(error.response.data.error);
      navigate("/login");
    } else {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            scheme={Cinnamon.Crisp.SCHEME_RED}
            content={() => error.response.data.error}
            title="Error"
          />
        ),
      });
      isCallbackFunction(cb);
    }
  }
}

export default handleRequestError;
