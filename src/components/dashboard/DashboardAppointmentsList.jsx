import React from "react";
import DashboardAppointmentsListItem from "./DashboardAppointmentsListItem";

const DashboardAppointmentsList = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Participant Name</th>
          <th>Location</th>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <DashboardAppointmentsListItem />
        <DashboardAppointmentsListItem />
        <DashboardAppointmentsListItem />
      </tbody>
    </table>
  );
};

export default DashboardAppointmentsList;
