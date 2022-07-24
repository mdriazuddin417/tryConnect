import React from "react";
import SubChild from "../SubChild";
import AirlinesChild from "./AirlinesChild";

const Airlines = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <AirlinesChild />
    </div>
  );
};

export default Airlines;
