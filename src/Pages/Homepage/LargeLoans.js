import React from "react";
import Loans from "../../components/largeLoans/Loans";
import Harmony from "../../components/largeLoans/Harmony";
import { Link } from "react-router-dom";
const LargeLoans = () => {
  return (
    <div className="container">
      <div className="container-top text-center">
        <p>
          You’ve decided to stay in Avalon and build a home. Get approved for a
          loan at <span className="font-bold">Large Loans</span> to get started.
        </p>
      </div>
      <div className="space-y-6 px-[36px]">
        <div>
          <Link to={"/LargeLoans"}>
            <Loans />
          </Link>
        </div>
        <div>
          <Link to={"/HarmonyHomes"}>
            <Harmony />
          </Link>
        </div>
      </div>

      <div className="container-child">
        <p>Demonstrates: </p>
        <span className="px-[4px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Issuance
        </span>
        <span className="px-[4px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Verification
        </span>
      </div>
    </div>
  );
};

export default LargeLoans;
