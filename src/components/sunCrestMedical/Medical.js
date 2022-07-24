import React from "react";
import SubChild from "../SubChild";
import MedicalChild from "./MedicalChild";

const Medical = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <MedicalChild />
    </div>
  );
};

export default Medical;
