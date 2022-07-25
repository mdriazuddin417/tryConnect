import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import HealthChild from "../../components/loftyLabs/HealthChild";
import RequiredBtn from "../../components/Shared/RequiredBtn";
import RefreshData from "../../components/Shared/RefreshData";
import HealthCheck from "./HealthCheck";
const HealingHealth = () => {
  const [active, setActive] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [checkYes, setCheckYes] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-5 ">
          <HealthChild />
        </div>
      </div>

      {!active && !checkNo && !checkYes && (
        <div>
          <HealthCheck setActive={setActive} />
        </div>
      )}

      {active && (
        <div className="flex flex-col justify-center items-center">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-5">
            Do you have both of these credentials?
          </h3>
          <ul className="lg:text-xl text-lg list-disc">
            <li>
              COVID19 Test from <span className="underline">Lofty Labs</span>
            </li>
            <li>
              Staff Passport from
              <span className="underline">SunCrest Medical</span>{" "}
            </li>
          </ul>
          <RequiredBtn
            bg={"bg-5"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}
      {checkNo && !active && !checkYes && (
        <div className="flex  justify-center items-center text-center px-10">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-5">
            Go get your{" "}
            <span className="underline cursor-pointer">COVID19 Test</span> and{" "}
            <span className="underline cursor-pointer">Staff Passport</span>{" "}
            credentials. Then come back.
          </h3>
        </div>
      )}
      {(checkYes || (checkNo && active)) && (
        <div className="flex flex-col justify-center items-center">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-5 text-center">
            Please scan the code and share your Passport using Connect.Me.
          </h3>
          <p className="text-lg italic">
            This page will refresh automatically.
          </p>
          <RefreshData
            bg={"bg-5"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}

      <BackPage text="text-5" bg="bg-5" />
    </div>
  );
};

export default HealingHealth;
