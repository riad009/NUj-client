import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import EcoSpaceSidebar from "../ecoSpace/EcoSpaceSidebar";
import EcoSpaceRightBar from "../ecoSpace/EcoSpaceRightBar";

const EcoSpaceLayout = () => {
  const data = useLoaderData();

  const ecoSpace = data.data;

  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="bg-[#4a154b] text-white col-span-3 grid grid-cols-5">
        {/* <div className="col-span-1 border-r-[.5px] border-gray-300">menu</div>
        <div className="col-span-4">Channles</div> */}
        <EcoSpaceSidebar ecoSpace={ecoSpace} />
      </div>
      <div className="col-span-6">
        <Outlet />
      </div>
      <div className="col-span-3 border-l-[.5px] border-gray-300">
        <EcoSpaceRightBar ecoSpace={ecoSpace} />
      </div>
    </div>
  );
};

export default EcoSpaceLayout;
