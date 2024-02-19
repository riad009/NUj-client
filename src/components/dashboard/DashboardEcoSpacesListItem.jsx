import React from "react";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardEcoSpacesListItem = () => {
  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">XYZ Org</div>
          <div className="text-sm opacity-50">Mental Support</div>
        </div>
      </td>
      <td>
        Address, Address, Address,
        <br />
        <span className="badge badge-ghost badge-sm">email, website</span>
      </td>

      <td>0</td>
      <td>EcoSpace Enterprise</td>
      <td className="flex items-center justify-start gap-2">
        <Link to="/dashboard/eco-spaces/eco-space">
          <IoEye className="text-xl text-primary" />
        </Link>
      </td>
    </tr>
  );
};

export default DashboardEcoSpacesListItem;
