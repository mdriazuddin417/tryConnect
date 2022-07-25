import React from "react";
import { GiMedicalDrip } from "react-icons/gi";

const MedicalChild = () => {
  return (
    <div className="flex justify-between items-center gap-5 z-50">
      <span className="header-icon">
        <GiMedicalDrip />
      </span>
      <div className="header-text">
        <h3 className="header-title">SunCrest Medical</h3>
        <p className="header-info">
          Get Proof of Employment and Staff Passport credentials here
        </p>
      </div>
    </div>
  );
};

export default MedicalChild;
