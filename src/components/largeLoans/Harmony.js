import React from "react";
import SubChild from "../SubChild";
import HarmonyChild from "./HarmonyChild";
import { FaMoneyBill } from "react-icons/fa";
const Harmony = () => {
  return (
    <div className=" parent-section">
      <SubChild>
        <div className="flex flex-col gap-1 justify-center lg:items-end items-center ">
          <h2 className="font-semibold"> Required Credentials</h2>
          <p className=" flex gap-2">
            <FaMoneyBill className="text-green-600 lg:text-lg" /> Loan
            Pre-approval
          </p>
        </div>
      </SubChild>
      <div className="section  lg:absolute md:absolute top-0 left-0 duration-300 bg-7">
        <HarmonyChild />
      </div>
    </div>
  );
};

export default Harmony;
