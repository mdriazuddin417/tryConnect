import React from "react";
import { GiMedicalDrip } from "react-icons/gi";
import SubChild from "../SubChild";

const Medical = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>

      <div className="section bg-1 absolute top-0 left-0 duration-300">
        <div className="flex justify-center items-center gap-5">
          <span className="text-white text-4xl">
            <GiMedicalDrip />
          </span>
          <div className="text-white">
            <h3 className="text-2xl font-bold">SunCrest Medical</h3>
            <p className="text-sm ">
              Get Proof of Employment and Staff Passport credentials here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medical;
