import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import UnionChild from "../../components/sunCrestMedical/UnionChild";
import ChooseOption from "./ChooseOption";
import FinancialProfile from "./FinancialProfile";
import PasswordLogin from "./PasswordLogin";
const HappyMembersCreditUnion = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-3 ">
          <UnionChild />
        </div>
      </div>
      {active1 || active2 || (
        <div data-aos="fade-left">
          <ChooseOption setActive1={setActive1} setActive2={setActive2} />
        </div>
      )}
      {active1 && (
        <div data-aos="fade-left">
          <FinancialProfile setActive1={setActive1} />
        </div>
      )}
      {active2 && (
        <div data-aos="fade-left">
          <PasswordLogin setActive2={setActive2} />
        </div>
      )}

      <BackPage text="text-3" bg="bg-3" />
    </div>
  );
};

export default HappyMembersCreditUnion;
