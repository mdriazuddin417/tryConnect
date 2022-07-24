import React from "react";
import SubChild from "../SubChild";
import UnionChild from "./UnionChild";

const CreateUnion = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <UnionChild />
    </div>
  );
};

export default CreateUnion;
