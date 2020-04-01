import React from "react";
import ButterToast, { Cinnamon } from "butter-toast";

function handleRequestError(error, cb) {
  if (error.response) {
    if (error.response.status >= 500) {
      ButterToast.raise({
        content: (
          <Cinnamon.Crisp
            scheme={Cinnamon.Crisp.SCHEME_RED}
            content="Something went wrong. Please refresh and try again"
            title="Error"
          />
        )
      });
      if (cb && typeof cb === "function") {
        cb();
      }
    }
    ButterToast.raise({
      content: (
        <Cinnamon.Crisp
          scheme={Cinnamon.Crisp.SCHEME_RED}
          content={() => error.response.data.error}
          title="Error"
        />
      )
    });
    if (cb && typeof cb === "function") {
      cb();
    }
  }
}

export default handleRequestError;
