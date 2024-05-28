import { IoEye } from "react-icons/io5";

import { Link } from "react-router-dom";

const DashboardAppointmentsListItem = ({ appointment }) => {
  const { userId, date, time, status, _id } = appointment ?? {};
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{userId?.name}</div>
        </div>
      </td>

      <td>
        {time} - {date}
      </td>

      <td>{status}</td>
      <td className="flex items-center justify-start gap-2">
        <Link to={`/appointments/${_id}`}>
          <IoEye className="text-xl text-primary" />
          View
        </Link>
      </td>
    </tr>
  );
};

export default DashboardAppointmentsListItem;
