import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import LoansChild from "../../components/largeLoans/LoansChild";
import LargeLoansChildren from "./LargeLoansChildren";
import RequiredBtn from "../../components/Shared/RequiredBtn";
import RefreshData from "../../components/Shared/RefreshData";
const LargeLoans = () => {
  const [active, setActive] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [checkYes, setCheckYes] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between ">
      <div className="p-5">
        <div className="section bg-6 ">
          <LoansChild />
        </div>
      </div>

      {!active && !checkNo && !checkYes && (
        <div>
          <LargeLoansChildren setActive={setActive} />
        </div>
      )}

      {active && (
        <div className="flex flex-col justify-center items-center space-y-4 px-3">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-6  ">
            Do you have both of these credentials?
          </h3>
          <ul className="lg:text-xl text-lg list-disc px-4">
            <li>
              Proof of Employment from{" "}
              <span className="underline">SunCrest Medical </span>
            </li>
            <li>
              Financial Statement from
              <span className="underline">
                Happy Members Credit Union{" "}
              </span>{" "}
            </li>
          </ul>
          <RequiredBtn
            bg={"bg-6"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}
      {checkNo && !active && !checkYes && (
        <div className="flex  justify-center items-center text-center px-10">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-6">
            Go get your <span className="underline">Proof of Employment</span>{" "}
            and Financial Statement credentials. Then come back.
          </h3>
        </div>
      )}
      {(checkYes || (checkNo && active)) && (
        <div className="flex flex-col justify-center items-center text-center px-10">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-6">
            Please scan the code and share your Passport using Connect.Me.
          </h3>
          <p className="text-lg italic">
            This page will refresh automatically.
          </p>
          <RefreshData
            bg={"bg-6"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}

      <BackPage text="text-6" bg="bg-6" />
    </div>
  );
};

export default LargeLoans;
