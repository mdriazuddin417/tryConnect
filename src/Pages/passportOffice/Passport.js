import React from "react";

import RefreshData from "../../components/Shared/RefreshData";

const Passport = ({ setActive }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className="w-[80%] text-center mx-auto space-y-8"
    >
      <div className=" space-y-2">
        <h3 className="lg:text-3xl text-xl text-[#6F5ED8] ">
          Scan the code with your Connect.Me app.
        </h3>
        <p className="text-lg text-gray-700 italic">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive} bg="bg-2" />
    </div>
  );
};

export default Passport;
