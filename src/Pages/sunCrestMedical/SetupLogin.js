import React from "react";
import RefreshData from "../../components/Shared/RefreshData";

const SetupLogin = ({ setActive3 }) => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className=" space-y-2">
        <h3 className="text-3xl text-[#e0725a] ">
          Scan the code with Connect.Me.
        </h3>
        <h3 className="text-3xl text-[#e0725a] ">
          Accept our connection request to set up passwordless login.
        </h3>
        <p className="text-xl text-gray-700">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive3} bg="bg-1" />
    </div>
  );
};

export default SetupLogin;