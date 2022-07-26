import React, { useState } from "react";
import BackPage from "../../components/Shared/BackPage";
import LabsChild from "../../components/loftyLabs/LabsChild";
import LoftyLabsChildren from "./LoftyLabsChildren";
import RequiredBtn from "../../components/Shared/RequiredBtn";
import RefreshData from "../../components/Shared/RefreshData";
const LoftyLabs = () => {
  const [active, setActive] = useState(false);
  const [checkNo, setCheckNo] = useState(false);
  const [checkYes, setCheckYes] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between overflow-hidden">
      <div className="p-5">
        <div className="section bg-4 ">
          <LabsChild />
        </div>
      </div>

      {!active && !checkNo && !checkYes && (
        <div>
          <LoftyLabsChildren setActive={setActive} />
        </div>
      )}

      {active && (
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="lg:text-4xl text-2xl text-4">
            Do you have your passport?
          </h3>
          <p className="lg:text-xl text-lg text-center">
            A digital Passport from
            <span className="underline cursor-pointer ">
              Parcadia Passport Office
            </span>{" "}
            is required to get your COVID19 Test.
          </p>
          <RequiredBtn
            bg={"bg-4"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}
      {checkNo && !active && !checkYes && (
        <div data-aos="fade-left" className="flex  justify-center items-center">
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-4 text-center">
            Go get your Passport from
            <span className="underline cursor-pointer">
              Parcadia Passport Office
            </span>
            Then come back.
          </h3>
        </div>
      )}
      {(checkYes || (checkNo && active)) && (
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center items-center"
        >
          <h3 className="lg:text-4xl md:text-3xl text-2xl text-4 text-center">
            Please scan the code and share your Passport using Connect.Me.
          </h3>
          <p className=" text-lg italic">
            This page will refresh automatically.
          </p>
          <RefreshData
            bg={"bg-4"}
            setCheckNo={setCheckNo}
            setCheckYes={setCheckYes}
            setActive={setActive}
          />
        </div>
      )}

      <BackPage text="text-4" bg="bg-4" />
    </div>
  );
};

export default LoftyLabs;
