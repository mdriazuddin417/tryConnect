import React from "react";
import Health from "../../components/loftyLabs/Health";
import Labs from "../../components/loftyLabs/Labs";
import { Link } from "react-router-dom";
const LoftyLabs = () => {
  return (
    <div className="container">
      <div className="container-top text-center">
        <p className="text-sm">
          Your employer has requested that you get a covid test at{" "}
          <span className="font-bold">Lofty Labs</span>.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <Link to={"/LoftyLabs"}>
            <Labs />
          </Link>
        </div>
        <div>
          <Link to={"/HealingHealth"}>
            <Health />
          </Link>
        </div>
      </div>
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

export default LoftyLabs;
