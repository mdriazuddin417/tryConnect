import React from "react";
import { GiMedicalDrip } from "react-icons/gi";

const PassportChild = () => {
  return (
    <div className="h-[100px] px-4 bg-gradient-to-r from-[#8C7FDD] to-[#6F5ED8] rounded-[25px] cursor-pointer flex justify-start item-center w-full hover:w-[70%] duration-500 absolute top-0 left-0">
      <div className="flex justify-center items-center gap-5">
        <span className="text-white text-4xl">
          <GiMedicalDrip />
        </span>
        <div className="text-white">
          <h3 className="text-2xl font-bold">Parcadia Passport Office</h3>
          <p className="text-sm ">Obtain a digital passport here</p>
        </div>
      </div>
    </div>
  );
};

export default PassportChild;
