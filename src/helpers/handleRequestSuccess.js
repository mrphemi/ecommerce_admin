import React from "react";
import ButterToast, { Cinnamon } from "butter-toast";

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
  cb();
}

export default handleRequestSuccess;
