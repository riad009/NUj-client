import DashboardAppointmentsListItem from "./DashboardAppointmentsListItem";

const DashboardAppointmentsList = ({ appointments }) => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>Participant Name</th>

          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {appointments?.length
          ? appointments.map((appointment, i) => (
              <DashboardAppointmentsListItem
                key={i}
                appointment={appointment}
              />
            ))
          : ""}
      </tbody>
    </table>
  );
};

export default DashboardAppointmentsList;
