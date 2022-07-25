import React from "react";
import RefreshData from "../../components/Shared/RefreshData";

const FinancialProfile = ({ setActive1 }) => {
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[70%] mx-auto  space-y-2">
        <h3 className="text-3xl text-[#FCA43E] ">
          Scan the code with your Connect.Me app.
        </h3>
        <p className="text-xl text-gray-700 italic ">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive1} bg="bg-3" />
    </div>
  );
};

export default FinancialProfile;
