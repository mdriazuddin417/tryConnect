import React from "react";
import { GiMedicalDrip } from "react-icons/gi";

const MedicalChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="text-white text-4xl">
        <GiMedicalDrip />
      </span>
      <div className="text-white">
        <h3 className="header-title">SunCrest Medical</h3>
        <p className="header-info">
          Get Proof of Employment and Staff Passport credentials here
        </p>
      </div>
    </div>
  );
};

export default MedicalChild;
