import React from "react";

const HarmonyHomesChildren = ({ setActive }) => {
  const handleActive = () => {
    setActive(true);
  };
  return (
    <div className=" text-center mx-auto space-y-8">
      <div className="lg:w-[70%] mx-auto  space-y-8">
        <h3 className="lg:text-4xl md:text-3xl text-[28px] text-7">
          Thank you for visiting Harmony Homes.
        </h3>
        <p className="lg:text-xl md:text-lg text-[15px] text-gray-700">
          As Alice, you really like the home models from Harmony Homes, and
          decide to build a house with them.
        </p>
      </div>
      <div className="flex justify-center items-center text-white header-title">
        <span
          onClick={handleActive}
          className="bg-7 p-5 rounded-full cursor-pointer flex items-center"
        >
          Sign a Home Purchase Contract
        </span>
      </div>
    </div>
  );
};

export default HarmonyHomesChildren;
