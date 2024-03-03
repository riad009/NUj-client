import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardUserProfileAppointmentListItem = ({ appointment }) => {
  const { location, date, time, reason, status, _id } = appointment ?? {};
  return (
    <tr>
      <td>{location}</td>
      <td>
        {time} - {date}
      </td>
      <td>{reason}</td>
      <td>{status}</td>
      <td className="flex items-center justify-start gap-2">
        <Link to={`/profile/eco-space/appointments/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
      </td>
    </tr>
  );
};

export default DashboardUserProfileAppointmentListItem;
