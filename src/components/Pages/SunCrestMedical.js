import React from "react";
import CreateUnion from "../sunCrestMedical/CreateUnion";
import Medical from "../sunCrestMedical/Medical";
import Passport from "../sunCrestMedical/Passport";

const SunCrestMedical = () => {
  return (
    <div className="container">
      <div className="container-top text-center">
        <p className="text-sm">
          It’s your first day of work at{" "}
          <span className="font-bold">Suncrest Medical</span>. Looks like you’ve
          got some things to set up. Get started with your employee credentials!
        </p>
      </div>
      <Medical />
      <Passport />
      <CreateUnion />
      <div className="container-child">
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
