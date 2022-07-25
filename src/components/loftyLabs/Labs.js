import React from "react";
import SubChild from "../SubChild";
import LabsChild from "./LabsChild";
import { MdHouseSiding } from "react-icons/md";
const Labs = () => {
  return (
    <div className=" parent-section">
      <SubChild>
        <div className="flex flex-col gap-1 justify-center lg:items-end items-center ">
          <h2 className="font-semibold"> Required Credentials</h2>
          <p className=" flex gap-2">
            <MdHouseSiding className="text-indigo-600 lg:text-xl" /> Passport
          </p>
        </div>
      </SubChild>
      <div className="section  lg:absolute md:absolute top-0 left-0 duration-300 bg-4">
        <LabsChild />
      </div>
    </div>
  );
};

export default Labs;
