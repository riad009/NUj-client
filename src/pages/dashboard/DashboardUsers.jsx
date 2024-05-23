import DashboardUsersListItem from "../../components/dashboard/DashboardUsersListItem";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";

const DashboardUsers = () => {
  const { data: users, refetch } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(`${config.api_url}/users/all`);
      const data = await res.json();
      return data.data;
    },
  });
  console.log(users);
  return (
    <div className="overflow-x-auto p-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.length
            ? users.map((user, i) => (
                <DashboardUsersListItem key={i} user={user} refetch={refetch} />
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUsers;
