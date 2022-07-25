import React from "react";
import SubChild from "../SubChild";
import PasswordChild from "./PasswordChild";

const Passport = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-2">
        <PasswordChild />
      </div>
    </div>
  );
};

export default Passport;
