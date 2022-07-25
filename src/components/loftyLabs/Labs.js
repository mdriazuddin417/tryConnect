import React from "react";
import { GiDiscGolfBag } from "react-icons/gi";
import SubChild from "../SubChild";
import LabsChild from "./LabsChild";

const Labs = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-4">
        <LabsChild />
      </div>
    </div>
  );
};

export default Labs;
