import React from "react";
import { GiBurningPassion } from "react-icons/gi";
import { MdHouseSiding } from "react-icons/md";
import SubChild from "../SubChild";
import AirlinesChild from "./AirlinesChild";

const Airlines = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <div className="flex flex-col gap-1 justify-center lg:items-end items-center ">
          <h2 className="font-semibold"> Required Credentials</h2>
          <p className=" flex gap-2">
            <MdHouseSiding className="text-indigo-600 lg:text-xl" /> Passport
          </p>
          <p className="flex gap-2">
            <GiBurningPassion className="text-orange-600 lg:text-lg" /> COVID-19
            Test Result
          </p>
        </div>
      </SubChild>
      <div className="section  lg:absolute md:absolute top-0 left-0 duration-300 bg-8">
        <AirlinesChild />
      </div>
    </div>
  );
};

export default Airlines;
