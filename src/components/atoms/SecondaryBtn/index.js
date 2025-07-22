import React from "react";

const SecondaryBtn = ({ children, className, onClick }) => {
  return (
    <button
      className={`${className} btn text-primary border-2 border-primary bg-transparent hover:bg-primary hover:text-white transition-all duration-300 ease-in-out px-5 py-2 rounded-md shadow-md hover:shadow-lg`}
      onClick={onClick}
    >
      {children}
    </button>

  );
};

export default SecondaryBtn;
