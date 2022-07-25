import React from "react";

const HealthCheck = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div className="w-[80%] text-center mx-auto space-y-8">
      <div className="w-[70%] mx-auto  space-y-8">
        <h3 className="text-4xl text-5 font-semibold">
          Thank you for coming. Please check in.
        </h3>
        <p className="text-xl text-gray-700">
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
          className="bg-5 p-4 rounded-full cursor-pointer flex items-center"
        >
          Check in for work
        </span>
      </div>
    </div>
  );
};

export default HealthCheck;
