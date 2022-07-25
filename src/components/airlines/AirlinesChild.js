import React from "react";
import { FiAirplay } from "react-icons/fi";

const AirlinesChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="text-white text-4xl">
        <FiAirplay />
      </span>
      <div className="text-white">
        <h3 className="header-title">Affordable Airlines</h3>
        <p className="header-info">
          Passport and COVID19 Test credentials required to fly.
        </p>
      </div>
    </div>
  );
};

export default AirlinesChild;
