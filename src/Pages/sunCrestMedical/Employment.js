import React from "react";

import RefreshData from "../../components/Shared/RefreshData";

const Employment = ({ setActive2 }) => {
  return (
    <div data-aos="fade-left" className="w-[80%] text-center mx-auto space-y-8">
      <div className="lg:w-[70%] mx-auto  space-y-2">
        <h3 className="lg:text-3xl text-xl text-[#e0725a] ">
          Scan the code with your Connect.Me app.
        </h3>
        <p className="lg:text-xl text-lg text-gray-700 italic">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive2} bg="bg-1" />
    </div>
  );
};

export default Employment;
