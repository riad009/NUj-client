import React, { useContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import EcoSpaceSidebar from "../ecoSpace/EcoSpaceSidebar";
import EcoSpaceRightBar from "../ecoSpace/EcoSpaceRightBar";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import styles from "./EcoSpaceLayout.module.css";

const EcoSpaceLayout = () => {
  const data = useLoaderData();
  const { ecoSpaceRightBarOpen, ecoSpaceLeftBarOpen } = useContext(AuthContext);

  const ecoSpace = data.data;

  return (
    <div className="grid grid-cols-12 h-screen ecospace-scroll-bar">
      <div
        className={`${
          ecoSpaceRightBarOpen ? "hidden md:grid" : ""
        } col-span-3  grid grid-cols-5 w-[100vw] md:w-auto z-20 ${
          ecoSpaceLeftBarOpen ? "" : "hidden md:grid"
        }`}
      >
        <EcoSpaceSidebar ecoSpace={ecoSpace} />
      </div>
      <div
        className={`${
          ecoSpaceRightBarOpen || ecoSpaceLeftBarOpen
            ? "hidden md:col-span-6 md:block"
            : "col-span-9"
        } w-[100vw] md:w-auto `}
      >
        <Outlet />
      </div>
      <div
        className={`${
          ecoSpaceRightBarOpen ? "block" : "hidden"
        } col-span-3 border-l-[.5px] border-gray-300 w-[100vw] md:w-auto`}
      >
        <EcoSpaceRightBar ecoSpace={ecoSpace} />
      </div>
    </div>
  );
};

export default EcoSpaceLayout;
