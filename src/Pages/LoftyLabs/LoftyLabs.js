import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import LabsChild from "../../components/loftyLabs/LabsChild";
import LoftyLabsChildren from "./LoftyLabsChildren";
const LoftyLabs = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-4 ">
          <LabsChild />
        </div>
      </div>
      {active || (
        <div>
          <LoftyLabsChildren setActive={setActive} />
        </div>
      )}
      {/* {active && (
        <div>
          <Passport setActive={setActive} />
        </div>
      )} */}

      <BackPage text="text-4" bg="bg-4" />
    </div>
  );
};

export default LoftyLabs;
