import React from "react";
import { GiLogicGateNor, GiLookAt, GiMedicalDrip } from "react-icons/gi";

import SubChild from "../SubChild";

const Loans = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-6">
        <div className="flex justify-center items-center gap-5">
          <span className="text-white text-4xl">
            <GiLogicGateNor />
          </span>
          <div className="text-white">
            <h3 className="header-title">Large Loans</h3>
            <p className="header-info">
              Financial Statement and Proof of Employment required. Get your
              Loan Approval today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
