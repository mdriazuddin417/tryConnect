import React from "react";
import { GiBurningPassion, GiVirus } from "react-icons/gi";
import SubChild from "../SubChild";
import HealthChild from "./HealthChild";

const Health = () => {
  return (
    <div className="  parent-section">
      <SubChild>
        <div className="flex flex-col gap-1 justify-center lg:items-end items-center">
          <h2 className="font-semibold"> Required Credentials</h2>
          <p className="flex gap-2">
            <GiBurningPassion className="text-orange-600 lg:text-lg" /> Staff
            Passport
          </p>
          <p className=" flex gap-2">
            <GiVirus className="text-red-600 lg:text-lg" /> COVID-19 Test
          </p>
        </div>
      </SubChild>
      <div className="section  lg:absolute md:absolute top-0 left-0 duration-300 bg-5">
        <HealthChild />
      </div>
    </div>
  );
};

export default Health;
