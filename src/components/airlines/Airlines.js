import React from "react";
import { GiMedicalDrip } from "react-icons/gi";
import SubChild from "../SubChild";

const Airlines = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-8">
        <div className="flex justify-center items-center gap-5">
          <span className="text-white text-4xl">
            <GiMedicalDrip />
          </span>
          <div className="text-white">
            <h3 className="text-2xl font-bold">Affordable Airlines</h3>
            <p className="text-sm ">
              Passport and COVID19 Test credentials required to fly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airlines;
