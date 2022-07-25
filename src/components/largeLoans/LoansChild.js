import React from "react";
import { GiLogicGateNor } from "react-icons/gi";

const LoansChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="text-white text-4xl">
        <GiLogicGateNor />
      </span>
      <div className="text-white">
        <h3 className="header-title">Large Loans</h3>
        <p className="header-info">
          Financial Statement and Proof of Employment required. Get your Loan
          Approval today!
        </p>
      </div>
    </div>
  );
};

export default LoansChild;
