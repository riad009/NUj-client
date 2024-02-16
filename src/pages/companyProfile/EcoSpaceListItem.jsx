import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Link } from "react-router-dom";

const EcoSpaceListItem = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-2 rounded-lg">
      <div className="">
        <h2 className="text-2xl md:text-lg">Company</h2>
        <div className="flex gap-1 items-center">
          <img
            className="size-10 rounded-box "
            src={user?.photoURL ? user?.photoURL : unknown}
            alt=""
          />
          <p>0 members</p>
        </div>
      </div>
      <h2>EcoSpace Working on</h2>
      <Link to="/profile/eco-space" className="p-btn w-full md:w-auto">
        Visit EcoSpace
      </Link>
    </div>
  );
};

export default EcoSpaceListItem;