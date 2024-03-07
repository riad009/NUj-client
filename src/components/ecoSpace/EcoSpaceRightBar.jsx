import React from "react";
import { RxCross2 } from "react-icons/rx";

const EcoSpaceRightBar = () => {
  return (
    <>
      <div className=" flex flex-col gap-5 relative h-[100vh] max-h-[100vh]">
        <div className="">
          <div className="border-b-[.5px] border-b-gray-300 h-16 flex justify-between items-center px-5">
            <div>
              <h2 className="font-semibold">Details</h2>
              <p className="text-sm text-gray-500">#Social Media</p>
            </div>
            <RxCross2 className="size-6 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EcoSpaceRightBar;
