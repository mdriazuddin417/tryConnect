import React from "react";
import { FiHome } from "react-icons/fi";

const HarmonyChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="header-icon">
        <FiHome />
      </span>
      <div className="header-text">
        <h3 className="header-title">Harmony Homes</h3>
        <p className="header-info">
          Loan Approval required. Build your dream home with Harmony Homes.
        </p>
      </div>
    </div>
  );
};

export default HarmonyChild;
