import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import EcoSpaceListItem from "./EcoSpaceListItem";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import LoadingScreen from "../../components/LoadingScreen";

const EcoSpaceList = () => {
  const { userDB } = useContext(AuthContext);

  const {
    data: ecoSpaces,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [userDB?.email, userDB, userDB?._id, "email"],
    queryFn: async () => {
      const res = await fetch(
        // `${config.api_url}/eco-spaces/list/${userDB?._id}`
        `${config.api_url}/eco-spaces/list?ownerId=${userDB?._id}&email=${userDB?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="bg-primary min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12 mx-auto my-20 space-y-5">
        <h4 className="text-xs text-white">Welcome</h4>
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          EcoSpaces accociated with <br /> {userDB?.email}
        </h1>
        <p className="text-sm text-white">
          Not seeing your EcoSpaces?
          <Link to="/login" className="link">
            Try using a different email
          </Link>
        </p>
        <div className="flex flex-col p-5 md:p-10 gap-5 bg-[#ecdeec] rounded-lg">
          <>
            {isLoading ? <LoadingScreen /> : ""}
            {ecoSpaces?.data?.length
              ? ecoSpaces.data.map((ecoSpace, i) => (
                  <EcoSpaceListItem
                    ecoSpace={ecoSpace}
                    key={i}
                    refetch={refetch}
                  />
                ))
              : ""}
          </>

          {userDB?.role === "admin" && (
            <div className="text-center">
              <Link to="/create-eco-space/banner" className="p-btn">
                Create New
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EcoSpaceList;
