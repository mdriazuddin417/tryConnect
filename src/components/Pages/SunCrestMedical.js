import React from "react";
import CreateUnion from "../sunCrestMedical/CreateUnion";
import Medical from "../sunCrestMedical/Medical";
import Passport from "../sunCrestMedical/Passport";

const SunCrestMedical = () => {
  return (
    <div className="container">
      <Medical />
      <Passport />
      <CreateUnion />
      <div className="flex justify-center items-center gap-5 text-sm  bg-[#F5F5F5] absolute bottom-0 left-0 py-5 w-full rounded-bl-[36px] rounded-br-[36px] border-gray-200 shadow border">
        <p>Demonstrates: </p>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Issuance
        </span>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Verification
        </span>
        <span className="px-[3px] py-[1px] border border-gray-400 rounded-full bg-white">
          Structured Messaging
        </span>
      </div>
    </div>
  );
};

export default SunCrestMedical;
