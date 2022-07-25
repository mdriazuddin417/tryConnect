import React from "react";
import { GiUnstableOrb } from "react-icons/gi";
import SubChild from "../SubChild";
import UnionChild from "./UnionChild";

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
        <UnionChild />
      </div>
    </div>
  );
};

export default CreateUnion;
