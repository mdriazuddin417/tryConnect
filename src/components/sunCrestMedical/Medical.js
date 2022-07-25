import React from "react";

import SubChild from "../SubChild";
import MedicalChild from "./MedicalChild";

const Medical = () => {
  return (
    <div className=" parent-section  ">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section bg-1 lg:absolute top-0 left-0 md:absolute duration-300  ">
        <MedicalChild />
      </div>
    </div>
  );
};

export default Medical;
