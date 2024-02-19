import React from "react";
import port from "../../assets/home/port.jpg";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

const DashboardUsersListItem = () => {
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" size-10">
              <img className="rounded-full" src={port} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">Hart Hagerty</div>
            {/* <div className="text-sm opacity-50">United States</div> */}
          </div>
        </div>
      </td>
      <td>
        Address, Address, Address,
        <br />
        <span className="badge badge-ghost badge-sm">phone, email</span>
      </td>
      <td>0</td>
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

export default DashboardUsersListItem;
