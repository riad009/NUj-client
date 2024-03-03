import React from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardEcoSpacesListItem = ({ ecoSpace }) => {
  const { company, serviceId, staffs, plan, _id } = ecoSpace;
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{company}</div>
        </div>
      </td>
      {/* <td>{serviceId?.title}</td> */}

      <td>{staffs?.length || "N/A"}</td>
      <td>{plan?.title || "free"}</td>
      <td className="flex items-center justify-start gap-2">
        <Link to={`/profile/eco-space/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
        {/* <button>
          <MdDelete className="text-xl text-error" />
        </button> */}
      </td>
    </tr>
  );
};

export default DashboardEcoSpacesListItem;
