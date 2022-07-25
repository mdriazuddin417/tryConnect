import React from "react";
import { GiLogicGateNor, GiLookAt, GiMedicalDrip } from "react-icons/gi";

import SubChild from "../SubChild";
import LoansChild from "./LoansChild";

const Loans = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-6">
        <LoansChild />
      </div>
    </div>
  );
};

export default Loans;
