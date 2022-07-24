import React from "react";
import SubChild from "../SubChild";
import LabsChild from "./LabsChild";

const Labs = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <LabsChild />
    </div>
  );
};

export default Labs;
