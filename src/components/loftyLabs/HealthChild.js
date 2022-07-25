import React from "react";
import { GiHealthNormal } from "react-icons/gi";

const HealthChild = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <span className="header-icon">
        <GiHealthNormal />
      </span>
      <div className="header-text">
        <h3 className="header-title">Healing Health</h3>
        <p className="header-info ">
          Requires COVID19 Test and Staff Passport credentials.
        </p>
      </div>
    </div>
  );
};

export default HealthChild;
