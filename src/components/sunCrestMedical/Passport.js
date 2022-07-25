import React from "react";
import SubChild from "../SubChild";
import PasswordChild from "./PasswordChild";

const Passport = () => {
  return (
    <div className="  parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section bg-2 lg:absolute top-0 left-0 md:absolute duration-300">
        <PasswordChild />
      </div>
    </div>
  );
};

export default Passport;
