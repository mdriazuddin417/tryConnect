import React from "react";
import RefreshData from "../../components/Shared/RefreshData";

const PasswordLogin = ({ setActive2 }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="500"
      data-aos-duration="500"
      className="w-[80%] text-center mx-auto space-y-8"
    >
      <div className="lg:w-[90%] mx-auto  space-y-2">
        <h3 className="lg:text-3xl text-xl text-[#FCA43E] ">
          Scan the code with your Connect.Me app.
        </h3>
        <h3 className="lg:text-3xl text-xl text-[#FCA43E] ">
          Accept our connection request to set up passwordless login.
        </h3>
        <p className="lg:text-xl text-lg italic text-gray-700 italic">
          This page will refresh automatically.
        </p>
      </div>
      <RefreshData setActive={setActive2} bg="bg-3" />
    </div>
  );
};

export default PasswordLogin;
