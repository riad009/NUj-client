import React from "react";
import { Link } from "react-router-dom";

const EcoSpaceListForAppointment = () => {
  return (
    <div className="mt-20">
      eco-spaces
      <Link className="p-btn" to="/make-appointment">
        Make Appointment
      </Link>
    </div>
  );
};

export default EcoSpaceListForAppointment;
