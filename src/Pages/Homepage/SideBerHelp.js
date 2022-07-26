import React, { useState } from "react";
import help from "../../image/help.svg";
const SideBerHelp = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {!open ? (
        <div
          onClick={() => setOpen(!open)}
          className="p-[10px] cursor-pointer bg-white  border border-gray-200  home-sidebar z-50 w-[120px] h-[120px]"
        >
          <img src={help} alt="" />
        </div>
      ) : (
        <div className=" p-[35px] bg-white  border border-gray-200 rounded-tr-2xl rounded-br-2xl w-[400px] h-[620px] home-sidebar z-50 flex lg:flex-col md:flex-col flex-col-reverse">
          <p
            onClick={() => setOpen(!open)}
            className="text-end text-2xl absolute top-1 right-3 cursor-pointer"
          >
            ✖
          </p>
          <div className="flex gap-10 justify-center items-center py-4 bg-[#F5F5F5]  border border-gray-200 rounded-2xl w-[410px] shadow-lg ml-[-70px] lg:ml-0 md:ml-0 ">
            <img src={help} alt="" className="w-[100px] h-[100px]" />
            <div className="flex flex-col justify-between ">
              <span>
                <h3 className="font-bold text-2xl">Alice Jones</h3>
                <p className="text-sm italic text-gray-800">Avalon, USA</p>
              </span>
              <p className="text-sm italic text-gray-800">Nurse Practitioner</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-700 my-5">
              In this interactive demo, act as Alice to obtain credentials and
              use them to accomplish goals.
            </p>
            <div>
              <h2 className="text-2xl font-bold">Connect.Me Interactions</h2>
              <div className=" text-sm lg:mt-3 md:mt-3 mb-3 space-y-3">
                <span className="px-[4px] py-[1px] border border-gray-400 rounded-full inline-block">
                  Credential Issuance
                </span>
                <p>
                  Through the Connect.Me app, a third party can issue a digital
                  credential to Alice.
                </p>
                <p className="px-[4px] py-[1px] border border-gray-400 rounded-full inline-block">
                  Credential Verification
                </p>
                <p>
                  Through the Connect.Me app, a third party can request to view
                  a credential in Alice’s wallet.
                </p>
                <span className="px-[4px] py-[1px] border border-gray-400 rounded-full inline-block">
                  Structured Messaging
                </span>
                <p>
                  Through the Connect.Me app, a third party can send structured
                  messages to verify actions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBerHelp;
