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
        {open ? <Loading /> : <img src={code} alt="" className="w-36 my-8" />}
      </div>
      <div className="flex justify-center items-center text-white">
        <button
          onClick={CancelBtn}
          className={`${bg} px-4 py-3 text-3xl rounded-full flex justify-center gap-2`}
        >
          ✖ Cancel
        </button>
      </div>
    </>
  );
};

export default RefreshData;
