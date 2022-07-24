import React from "react";

import SubChild from "../SubChild";
import LoansChild from "./LoansChild";

const Loans = () => {
  return (
    <div className=" relative">
      <SubChild>
        <h2 className="font-semibold"> No Required Credentials</h2>
      </SubChild>
      <LoansChild />
    </div>
  );
};

export default Loans;
