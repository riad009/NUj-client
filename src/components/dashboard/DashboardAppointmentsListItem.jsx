import React from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardAppointmentsListItem = ({ appointment }) => {
  const {
    participantId,
    location,
    date,
    time,
    reason,
    status,
    isApproved,
    _id,
  } = appointment ?? {};
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{participantId?.name}</div>
        </div>
      </td>
      {/* <td>{location}</td> */}

      <td>
        {time} - {date}
      </td>
      <td>{reason}</td>
      <td>{status}</td>
      <td className="flex items-center justify-start gap-2">
        <Link to={`/profile/eco-space/appointments/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
        {/* <button>
          <MdDelete className="text-xl text-error" />
        </button> */}
      </td>
    </tr>
  );
};

export default DashboardAppointmentsListItem;
