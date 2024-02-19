import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DashboardRecentEcoSpacesAndAppointments = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-base-100 shadow-sm rounded-lg p-5 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Recent EcoSpaces</h2>
          <Link to="/dashboard/eco-spaces" className="flex items-center gap-1">
            <span>View All</span>
            <FaArrowRight />
          </Link>
        </div>
        <div>
          <div className="flex justify-between items-center gap-2 border-b py-2">
            <h3 className="font-semibold">Company Name</h3>
            <p>Project working on</p>
            <p>Plan</p>
          </div>
          <div className="flex justify-between items-center gap-2 border-b py-2">
            <h3 className="font-semibold">Company</h3>
            <p>working on</p>
            <p>free</p>
          </div>
          <div className="flex justify-between items-center gap-2  py-2">
            <h3 className="font-semibold">Company</h3>
            <p>working on</p>
            <p>free</p>
          </div>
        </div>
      </div>
      <div className="bg-base-100 shadow-sm rounded-lg p-5 space-y-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg">Recent Appointments</h2>
          <Link
            to="/dashboard/appointments"
            className="flex items-center gap-1"
          >
            <span>View All</span>
            <FaArrowRight />
          </Link>
        </div>
        <div>
          <div className="flex justify-between items-center gap-2 border-b py-2">
            <h3 className="font-semibold">Company Name</h3>
            <p>Particimant Name</p>
            <p>Reason</p>
          </div>
          <div className="flex justify-between items-center gap-2 border-b py-2">
            <h3 className="font-semibold">Company Name</h3>
            <p>Particimant Name</p>
            <p>Reason</p>
          </div>
          <div className="flex justify-between items-center gap-2 py-2">
            <h3 className="font-semibold">Company Name</h3>
            <p>Particimant Name</p>
            <p>Reason</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRecentEcoSpacesAndAppointments;
