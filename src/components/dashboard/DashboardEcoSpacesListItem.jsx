import React from "react";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DashboardEcoSpacesListItem = () => {
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">XYZ Org</div>
        </div>
      </td>
      <td>Mental Support</td>

      <td>0</td>
      <td>EcoSpace Enterprise</td>
      <td className="flex items-center justify-start gap-2">
        <Link to="/profile/eco-space">
          <IoEye className="text-xl text-primary" />
        </Link>
        <button>
          <MdDelete className="text-xl text-error" />
        </button>
      </td>
    </tr>
  );
};

export default DashboardEcoSpacesListItem;
