import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import HarmonyChild from "../../components/largeLoans/HarmonyChild";
import RequiredBtn from "../../components/Shared/RequiredBtn";
import RefreshData from "../../components/Shared/RefreshData";
import HarmonyHomesChildren from "./HarmonyHomesChildren";
const HarmonyHomes = () => {
  const [active, setActive] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [checkYes, setCheckYes] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-7 ">
          <HarmonyChild />
        </div>
      </div>

      {!active && !checkNo && !checkYes && (
        <div>
          <HarmonyHomesChildren setActive={setActive} />
        </div>
      )}

      {active && (
        <div className="flex flex-col justify-center items-center space-y-4">
          <h3 className="text-lg">
            You need a <span className="underline">Loan Approval</span> from
            Large Loans to continue.
          </h3>

          <RequiredBtn
            bg={"bg-7"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}
      {checkNo && !active && !checkYes && (
        <div className="flex  justify-center items-center text-center px-10">
          <h3 className="text-4xl text-7">
            Go get your Loan Approval from{" "}
            <span className="underline">Large Loans</span> Then come back.
          </h3>
        </div>
      )}
      {(checkYes || (checkNo && active)) && (
        <div className="flex flex-col justify-center items-center text-center px-10">
          <h3 className="text-3xl text-7">
            Please scan the code to share your Loan Approval.
          </h3>
          <p className="text-lg italic">
            This page will refresh automatically.
          </p>
          <RefreshData
            bg={"bg-7"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}

      <BackPage text="text-7" bg="bg-7" />
    </div>
  );
};

export default HarmonyHomes;