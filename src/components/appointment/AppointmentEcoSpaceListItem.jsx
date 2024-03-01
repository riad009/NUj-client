import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { FaArrowCircleRight } from "react-icons/fa";

const AppointmentEcoSpaceListItem = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-2 gap-2 rounded-lg">
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
      <div className="flex items-center w-full md:w-auto gap-2">
        <Link to="/make-appointment" className="p-btn w-auto">
          Make Appointment
        </Link>
        <Link to="/profile/eco-space" className="p-btn w-auto">
          Visit
        </Link>
      </div>
    </div>
  );
};

export default AppointmentEcoSpaceListItem;
