import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import config from "../../config";

const DashboardRecentEcoSpacesAndAppointments = () => {
  const [recentEcoSpaces, setRecentEcoSpaces] = useState(null);
  const [recentAppointments, setRecentAppointments] = useState(null);

  // setting recent ecospaces
  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/recent-eco-spaces`)
      .then((res) => res.json())
      .then((data) => setRecentEcoSpaces(data.data));
  }, []);

  // setting recent appointments
  useEffect(() => {
    fetch(`${config.api_url}/appointments/recent-appointments`)
      .then((res) => res.json())
      .then((data) => setRecentAppointments(data.data));
  }, []);

  console.log({ recentAppointments });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="bg-base-100 shadow-sm rounded-lg p-5 space-y-5 overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recent EcoSpaces</h2>
          <Link to="/dashboard/eco-spaces" className="flex items-center gap-1">
            <span className="font-semibold">View All</span>
            <FaArrowRight />
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Plan</th>
            </tr>
          </thead>
          <tbody>
            {recentEcoSpaces?.length
              ? recentEcoSpaces.map((ecoSpace, i) => (
                  <tr key={i}>
                    <td>{ecoSpace?.company}</td>
                    <td>{ecoSpace?.plan}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <div className="bg-base-100 shadow-sm rounded-lg p-5 space-y-5 overflow-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Recent Appointments</h2>
          <Link
            to="/dashboard/appointments"
            className="flex items-center gap-1"
          >
            <span className="font-semibold">View All</span>
            <FaArrowRight />
          </Link>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Participant</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentAppointments?.length
              ? recentAppointments.map((appointment, i) => (
                  <tr key={i}>
                    <td>{appointment?.ecoSpaceId?.company}</td>
                    <td>{appointment?.userId?.name}</td>
                    <td>{appointment?.status}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>

        {/* <div>
          <div className="grid grid-cols-3  gap-4 border-t py-4 text-lg ">
            <h3 className="font-semibold">Company</h3>
            <p className="font-semibold">Participant</p>
            <p className="font-semibold text-end">Reason</p>
          </div>

          {recentAppointments?.length
            ? recentAppointments.map((appointment, i) => (
                <div key={i} className="grid grid-cols-3  gap-4 border-t py-3">
                  <h3>{appointment?.ecoSpaceId?.company}</h3>
                  <p className="">{appointment?.userId?.name}</p>
                  <p className="text-end">{appointment?.reason}</p>
                </div>
              ))
            : ""}
        </div> */}
      </div>
    </div>
  );
};

export default DashboardRecentEcoSpacesAndAppointments;
