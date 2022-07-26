import React, { useState } from "react";
import MedicalChild from "../../components/sunCrestMedical/MedicalChild";
import Choose from "./Choose";
import StaffPassport from "./StaffPassport";
import Employment from "./Employment";
import SetupLogin from "./SetupLogin";
import BackPage from "../../components/Shared/BackPage";

const SunCrestMedical = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden">
      <div className="p-5">
        <div className="section bg-1 ">
          <MedicalChild />
        </div>
      </div>
      {active1 || active2 || active3 || (
        <div>
          <Choose
            setActive1={setActive1}
            setActive2={setActive2}
            setActive3={setActive3}
          />
        </div>
      )}
      {active1 && (
        <div>
          <StaffPassport setActive1={setActive1} />
        </div>
      )}
      {active2 && (
        <div>
          <Employment setActive2={setActive2} />
        </div>
      )}
      {active3 && (
        <div>
          <SetupLogin setActive3={setActive3} />
        </div>
      )}
      <BackPage text="text-1" bg="bg-1" />
    </div>
  );
};

export default SunCrestMedical;
