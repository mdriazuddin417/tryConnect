import React from "react";
import { GiUnstableOrb } from "react-icons/gi";
import SubChild from "../SubChild";

const CreateUnion = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold flex flex-wrap">
          {" "}
          No Required Credentials
        </h2>
      </SubChild>
      <div className="section absolute top-0 left-0 duration-300 bg-3">
        <div className="flex justify-center items-center gap-5">
          <span className="text-white text-4xl">
            <GiUnstableOrb />
          </span>
          <div className="text-white">
            <h3 className="header-title">Happy Members Credit Union</h3>
            <p className="header-info">
              Get your financial statement as a digital credential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUnion;
