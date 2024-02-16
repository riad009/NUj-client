import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import EcoSpaceListItem from "./EcoSpaceListItem";

const EcoSpaceList = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="bg-primary min-h-screen flex justify-center items-center overflow-hidden">
      <div className="w-11/12 mx-auto my-20 space-y-5">
        <h4 className="text-xs text-white">Welcome</h4>
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          EcoSpaces accociated with <br /> {user?.email}
        </h1>
        <p className="text-sm text-white">
          Not seeing your EcoSpaces?
          <Link to="/login-options" className="link">
            Try using a different email
          </Link>
        </p>
        <div className="flex flex-col p-10 gap-5 bg-[#ecdeec] rounded-lg">
          <EcoSpaceListItem />
          <EcoSpaceListItem />
          <EcoSpaceListItem />
        </div>
      </div>
    </section>
  );
};

export default EcoSpaceList;
