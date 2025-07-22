import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="ripple-loader-container">
      <div className="ripple-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
