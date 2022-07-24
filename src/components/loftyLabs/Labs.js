import React from "react";
import { GiDiscGolfBag } from "react-icons/gi";
import SubChild from "../SubChild";

const Labs = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-4">
        <div className="flex justify-center items-center gap-5">
          <span className="text-white text-4xl">
            <GiDiscGolfBag />
          </span>
          <div className="text-white">
            <h3 className="header-title">Lofty Labs</h3>
            <p className="header-info ">
              Passport required. Get your COVID19 test here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Labs;
