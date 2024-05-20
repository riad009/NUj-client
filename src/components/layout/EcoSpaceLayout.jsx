import { useContext, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import EcoSpaceSidebar from "../ecoSpace/EcoSpaceSidebar";
import EcoSpaceRightBar from "../ecoSpace/EcoSpaceRightBar";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "../LoadingScreen";
import config from "../../config";

const EcoSpaceLayout = () => {
  // const data = useLoaderData();
  const ecoSpaceId = useLoaderData();
  const {
    data: ecoSpace,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["eco-space", ecoSpaceId],
    queryFn: async () => {
      const res = await fetch(`${config.api_url}/eco-spaces/${ecoSpaceId}`);
      const data = await res.json();
      return data.data;
    },
  });
  const { ecoSpaceRightBarOpen, ecoSpaceLeftBarOpen } = useContext(AuthContext);

  useEffect(() => {
    refetch();
  }, [ecoSpaceId]);

  // const ecoSpace = data.data;
  if (isLoading) {
    return <LoadingScreen />;
  }
  console.log(ecoSpace);
  return (
    <div className="grid grid-cols-12 h-screen ecospace-scroll-bar">
      <div
        className={`${
          ecoSpaceRightBarOpen ? "hidden md:grid" : ""
        } col-span-3  grid grid-cols-5 w-[100vw] md:w-auto z-20 ${
          ecoSpaceLeftBarOpen ? "" : "hidden md:grid"
        }`}
      >
        <EcoSpaceSidebar ecoSpace={ecoSpace} refetchEcoSpace={refetch} />
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
