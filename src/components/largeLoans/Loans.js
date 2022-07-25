import React from "react";
import { GiBurningPassion, GiVirus } from "react-icons/gi";

import SubChild from "../SubChild";
import LoansChild from "./LoansChild";

const Loans = () => {
  return (
    <div className="parent-section">
      <SubChild>
        <div className="flex flex-col gap-1 justify-center lg:items-end items-center ">
          <h2 className="font-semibold"> Required Credentials</h2>
          <p className=" flex gap-2">
            <GiBurningPassion className="text-orange-600 lg:text-lg" /> Proof of
            Employment
          </p>
          <p className="flex gap-2">
            <GiVirus className="text-red-600 lg:text-lg" /> Financial Statment
          </p>
        </div>
      </SubChild>
      <div className="section  lg:absolute md:absolute top-0 left-0 duration-300 bg-6">
        <LoansChild />
      </div>
    </div>
  );
};

export default Loans;
