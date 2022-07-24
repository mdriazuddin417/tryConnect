import React from "react";
import Loans from "../largeLoans/Loans";
import Harmony from "../largeLoans/Harmony";

const LargeLoans = () => {
  return (
    <div className="container">
      <div className="container-top text-center">
        <p className="text-sm">
          You’ve decided to stay in Avalon and build a home. Get approved for a
          loan at <span className="font-bold">Large Loans</span> to get started.
        </p>
      </div>

      <Loans />
      <Harmony />
      <div className="container-child">
        <p>Demonstrates: </p>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Issuance
        </span>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Verification
        </span>
      </div>
    </div>
  );
};

export default LargeLoans;
