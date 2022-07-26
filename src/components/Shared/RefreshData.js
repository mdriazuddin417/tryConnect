import React, { useState } from "react";
import Loading from "./Loading";
import code from "../../image/code.png";
const RefreshData = ({ setActive, bg, setCheckNo, setCheckYes }) => {
  const [open, setOpen] = useState(true);
  setTimeout(() => {
    setOpen(false);
  }, 1000);

  const CancelBtn = () => {
    if (setActive && setCheckNo && setCheckYes) {
      setActive(false);
      setCheckNo(false);
      setCheckYes(false);
    } else {
      setActive(false);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center">
        {open ? (
          <Loading />
        ) : (
          <img src={code} alt="" className="lg:w-36 md:w-32 w-28 my-8" />
        )}
      </div>
      <div className="flex justify-center items-center text-white">
        <button
          onClick={CancelBtn}
          className={`${bg} lg:px-4 px-3  py-3  lg:text-3xl text-2xl rounded-full flex justify-center gap-2`}
        >
          ✖ Cancel
        </button>
      </div>
    </>
  );
};

export default RefreshData;
