import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className=" bg-gradient-to-r from-secondary to-primary btn btn-primary uppercase text-white font-bold">
      {children}
    </button>
  );
};

export default PrimaryButton;
