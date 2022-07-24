import React from "react";
import { GiMedicalDrip } from "react-icons/gi";
import SubChild from "../SubChild";
import PassportChild from "./PassportChild";

const Passport = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <PassportChild />
    </div>
  );
};

export default Passport;
