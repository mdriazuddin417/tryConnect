import React from "react";
import { FiAirplay } from "react-icons/fi";

import SubChild from "../SubChild";
import AirlinesChild from "./AirlinesChild";

const Airlines = () => {
  return (
    <div className=" relative parent-section">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <div className="section  absolute top-0 left-0 duration-300 bg-8">
        <AirlinesChild />
      </div>
    </div>
  );
};

export default Airlines;
