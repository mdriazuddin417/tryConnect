import React from "react";
import SubChild from "../SubChild";
import HarmonyChild from "./HarmonyChild";

const Harmony = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <HarmonyChild />
    </div>
  );
};

export default Harmony;
