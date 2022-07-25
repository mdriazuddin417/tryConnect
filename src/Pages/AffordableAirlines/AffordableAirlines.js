import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import AirlinesChild from "../../components/airlines/AirlinesChild";
import RequiredBtn from "../../components/Shared/RequiredBtn";
import RefreshData from "../../components/Shared/RefreshData";
import AffordableAirlinesChildren from "./AffordableAirlinesChildren";
const AffordableAirlines = () => {
  const [active, setActive] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [checkYes, setCheckYes] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-8 ">
          <AirlinesChild />
        </div>
      </div>

      {!active && !checkNo && !checkYes && (
        <div>
          <AffordableAirlinesChildren setActive={setActive} />
        </div>
      )}

      {active && (
        <div className="flex flex-col justify-center items-center space-y-10">
          <h3 className="text-4xl text-8">
            Do you have both of these credentials?
          </h3>
          <ul className="text-xl list-disc">
            <li>
              COVID19 Test from
              <span className="underline">Lofty Labs</span>
            </li>
            <li>
              Passport from
              <span className="underline">Parcadia Passport Office</span>
            </li>
          </ul>
          <RequiredBtn
            bg={"bg-8"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}
      {checkNo && !active && !checkYes && (
        <div className="w-[70%] mx-auto flex  justify-center items-center text-center px-10">
          <h3 className="text-4xl text-8">
            Go get your <span className="underline">COVID19 Test</span> and
            <span className="underline"> Passport </span> credentials. Then come
            back.
          </h3>
        </div>
      )}
      {(checkYes || (checkNo && active)) && (
        <div className="flex flex-col justify-center items-center text-center px-10">
          <h3 className="text-3xl text-8">
            Please scan the code and share your information using Connect.Me.
          </h3>
          <p className="text-lg italic">
            This page will refresh automatically.
          </p>
          <RefreshData
            bg={"bg-8"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}

      <BackPage text="text-8" bg="bg-8" />
    </div>
  );
};

export default AffordableAirlines;
