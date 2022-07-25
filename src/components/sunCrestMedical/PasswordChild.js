import React from "react";
import { GiPassport } from "react-icons/gi";

const PasswordChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="header-icon">
        <GiPassport />
      </span>
      <div className="header-text">
        <h3 className="header-title">Parcadia Passport Office</h3>
        <p className="header-info">Obtain a digital passport here</p>
      </div>
    </div>
  );
};

export default PasswordChild;
