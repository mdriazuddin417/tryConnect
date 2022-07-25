import React from "react";
import CreateUnion from "../../components/sunCrestMedical/CreateUnion";
import Medical from "../../components/sunCrestMedical/Medical";
import Passport from "../../components/sunCrestMedical/Passport";
import { Link } from "react-router-dom";
const Medicals = () => {
  return (
    <div className="container">
      <div className="container-top">
        <p className="">
          It’s your first day of work at{" "}
          <span className="font-bold">Suncrest Medical</span>. Looks like you’ve
          got some things to set up. Get started with your employee credentials!
        </p>
      </div>

      <div className="space-y-6 px-[36px]">
        <div>
          <Link to={"/suncrestmedical"}>
            <Medical />
          </Link>
        </div>
        <div>
          <Link to={"/passportOffice"}>
            <Passport />
          </Link>
        </div>
        <div>
          <Link to={"/HappyMembersCreditUnion"}>
            <CreateUnion />
          </Link>
        </div>
      </div>

      <div className="container-child">
        <p>Demonstrates: </p>
        <span className="px-[4px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Issuance
        </span>
        <span className="px-[4px] py-[1px] border border-gray-400 rounded-full bg-white">
          Credential Verification
        </span>
        <span className="px-[4px] py-[1px] border border-gray-400 rounded-full bg-white">
          Structured Messaging
        </span>
      </div>
    </div>
  );
};

export default Medicals;
