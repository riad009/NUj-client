import React from "react";
import DashboardUsersListItem from "../../components/dashboard/DashboardUsersListItem";

const DashboardUsers = () => {
  return (
    <div className="overflow-x-auto p-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>EcoSpaces</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <DashboardUsersListItem />
          <DashboardUsersListItem />
          <DashboardUsersListItem />
          <DashboardUsersListItem />
          <DashboardUsersListItem />
          <DashboardUsersListItem />
          <DashboardUsersListItem />
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUsers;
