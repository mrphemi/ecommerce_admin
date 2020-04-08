import React from "react";
import ButterToast, { Cinnamon } from "butter-toast";

function isCallbackFunction(cb) {
  if (cb && typeof cb === "function") {
    cb();
  } else {
    return;
  }
}

function handleRequestSuccess(message, cb) {
  ButterToast.raise({
    content: (
      <Cinnamon.Crisp
        scheme={Cinnamon.Crunch.SCHEME_GREEN}
        content={() => message}
        title="Success"
      />
    )
  });
  isCallbackFunction(cb);
}

export default handleRequestSuccess;
