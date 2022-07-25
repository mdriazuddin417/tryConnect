import React from "react";
import { Link } from "react-router-dom";
import Airlines from "../../components/airlines/Airlines";

const AirlinesParent = () => {
  return (
    <div className="container">
      <div className="container-top text-center">
        <p className="text-sm">
          You’ve had a long first week and you need a break. Head to{" "}
          <span className="font-bold">Affordable Airlines</span> to board your
          flight.
        </p>
      </div>

      <div>
        <Link to={"/AffordableAirlines"}>
          <Airlines />
        </Link>
      </div>

      <div className="container-child">
        <p>Demonstrates: </p>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Issuance
        </span>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Verification
        </span>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Structured Messaging
        </span>
      </div>
    </div>
  );
};

export default AirlinesParent;
