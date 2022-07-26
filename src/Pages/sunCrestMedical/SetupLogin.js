import React from "react";
import RefreshData from "../../components/Shared/RefreshData";

const SetupLogin = ({ setActive3 }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className="w-[80%] text-center mx-auto space-y-8"
    >
      <div className=" space-y-2">
        <h3 className="lg:text-3xl text-xl text-1 ">
          Scan the code with Connect.Me.
        </h3>
        <h3 className="lg:text-3xl text-xl text-1 ">
          Accept our connection request to set up passwordless login.
        </h3>
        <p className="lg:text-xl text-lg italic text-gray-700">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive3} bg="bg-1" />
    </div>
  );
};

export default SetupLogin;
