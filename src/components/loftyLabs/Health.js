import React from "react";

import SubChild from "../SubChild";
import HealthChild from "./HealthChild";

const Health = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <HealthChild />
    </div>
  );
};

export default Health;
