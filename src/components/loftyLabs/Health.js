import React from "react";
import { GiHealthNormal, GiMedicalDrip } from "react-icons/gi";
import SubChild from "../SubChild";
import HealthChild from "./HealthChild";

const Health = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-5">
        <HealthChild />
      </div>
    </div>
  );
};

export default Health;
