import React from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardAppointmentsListItem = () => {
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">John Doe</div>
        </div>
      </td>
      <td>Address, Address, Address</td>

      <td>18:06:00 - 2024-02-13</td>
      <td>Reentry issues</td>
      <td>Approved</td>
      <td className="flex items-center justify-start gap-2">
        <Link to="/dashboard/users/user">
          <IoEye className="text-xl text-primary" />
        </Link>
        <button>
          <MdDelete className="text-xl text-error" />
        </button>
      </td>
    </tr>
  );
};

export default DashboardAppointmentsListItem;
