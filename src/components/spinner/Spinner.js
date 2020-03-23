import React from "react";

import "./spinner.css";

function Spinner() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Spinner;
