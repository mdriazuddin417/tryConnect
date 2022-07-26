import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import PasswordChild from "../../components/sunCrestMedical/PasswordChild";
import Parcadias from "./Parcadias";
import Passport from "./Passport";

const PassPortOffice = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden">
      <div className="p-5">
        <div className="section bg-2 ">
          <PasswordChild />
        </div>
      </div>
      {active || (
        <div>
          <Parcadias setActive={setActive} />
        </div>
      )}
      {active && (
        <div>
          <Passport setActive={setActive} />
        </div>
      )}

      <BackPage text="text-2" bg="bg-2" />
    </div>
  );
};

export default PassPortOffice;
