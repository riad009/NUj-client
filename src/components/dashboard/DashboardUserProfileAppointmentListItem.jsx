import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardUserProfileAppointmentListItem = () => {
  return (
    <tr>
      <td>
        <div className="font-bold">XYZ Org</div>
      </td>
      <td>address, address</td>
      <td>18:06:00 - 2024-02-13</td>
      <td>Requires Court Verification</td>
      <td>Approved</td>
      <td className="flex items-center justify-start gap-2">
        <Link>
          <IoEye className="text-xl text-primary" />
        </Link>
      </td>
    </tr>
  );
};

export default DashboardUserProfileAppointmentListItem;
