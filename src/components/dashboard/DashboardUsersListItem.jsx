import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardUsersListItem = ({ user }) => {
  const { photo, name, address, email, _id } = user;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" size-8">
              <img className="rounded-full" src={photo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {address ? address : "N/A"}
        <br />
      </td>

      <td className="flex items-center justify-start gap-2">
        <Link to={`/dashboard/users/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
        {/* <button>
          <MdDelete className="text-xl text-error" />
        </button> */}
      </td>
    </tr>
  );
};

export default DashboardUsersListItem;
