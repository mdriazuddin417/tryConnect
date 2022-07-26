import React from "react";

const RequiredBtn = ({ setCheckYes, setCheckNo, setActive, bg }) => {
  const handleYesBtn = () => {
    setActive(false);
    setCheckYes(true);
  };
  const handleNoBtn = () => {
    setActive(false);
    setCheckNo(true);
  };
  return (
    <div
      onClick={handleNoBtn}
      className="text-white flex justify-center items-center gap-10 mt-10"
    >
      <button
        className={`${bg} lg:text-3xl text-2xl lg:p-4 p-3 font-semibold flex gap-3 rounded-full`}
      >
        ✖ No
      </button>
      <button
        onClick={handleYesBtn}
        className={`${bg} lg:text-3xl text-2xl lg:p-4 p-3 font-semibold flex gap-3 rounded-full`}
      >
        ✔ Yes
      </button>
    </div>
  );
};

export default RequiredBtn;
