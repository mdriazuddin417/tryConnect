import React from "react";

const HealthCheck = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div data-aos="fade-left" className="w-[90%] text-center mx-auto space-y-8">
      <div className="lg:w-[70%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-5">
          Thank you for coming. Please check in.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          As Alice, you work for SunCrest Medical, but have been temporarily
          re-assigned to work at Healing Health to help with the spread of a
          nasty virus in that region. In order to quickly verify your readiness
          for work, Healing Health will need to verify some information from
          your.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={handleActive}
          className="bg-5 p-5 rounded-full cursor-pointer flex items-center"
        >
          Check in for work
        </span>
      </div>
    </div>
  );
};

export default HealthCheck;
