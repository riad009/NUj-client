import React from "react";
import DashboardEcoSpacesListItem from "../../components/dashboard/DashboardEcoSpacesListItem";
import { Link } from "react-router-dom";

const DashboardEcospaces = () => {
  return (
    <div className="overflow-x-auto p-5">
      <Link to="/create-eco-space/banner" className="p-btn">
        Add New
      </Link>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Company</th>
            <th>Service</th>
            <th>Staffs</th>
            <th>Plan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <DashboardEcoSpacesListItem />
          <DashboardEcoSpacesListItem />
          <DashboardEcoSpacesListItem />
          <DashboardEcoSpacesListItem />
          <DashboardEcoSpacesListItem />
          <DashboardEcoSpacesListItem />
        </tbody>
      </table>
    </div>
  );
};

export default DashboardEcospaces;
