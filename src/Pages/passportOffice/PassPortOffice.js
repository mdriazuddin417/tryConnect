import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import BackPage from "../../components/Shared/BackPage";
import PasswordChild from "../../components/sunCrestMedical/PasswordChild";
import Parcadias from "./Parcadias";
import Passport from "./Passport";

const PassPortOffice = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between ">
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

      <BackPage text="6F5ED8" bg="bg-2" />
    </div>
  );
};

export default PassPortOffice;
