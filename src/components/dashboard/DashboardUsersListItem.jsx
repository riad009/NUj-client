import { Popconfirm } from "antd";
import axios from "axios";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";
import config from "../../config";
import { toast } from "sonner";
import { MdDelete } from "react-icons/md";

const DashboardUsersListItem = ({ user, refetch }) => {
  const { photo, name, address, email, _id, role } = user;

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(`${config.api_url}/users/delete/${_id}`);

      if (res?.status === 200) {
        refetch();
        toast.success("User deleted!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
      return toast.error(
        error.response.data.message || `Something went wrong!`,
        {
          id: "login",
          duration: 2000,
          position: "top-center",
        }
      );
    }
  };
  const cancelDelete = (e) => {
    console.log(e);
  };

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
      <td>{role}</td>
      <td>
        {address ? address : "N/A"}
        <br />
      </td>

      <td className="flex items-center justify-start gap-4">
        <Link to={`/dashboard/users/${_id}`}>
          <IoEye className="text-xl text-primary" />
        </Link>
        <Popconfirm
          title="Delete the eco space!"
          description="Are you sure to delete this eco space?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
          okText="Yes"
          cancelText="No"
          okButtonProps={{
            style: {
              background: "#1677ff",
            },
          }}
        >
          <MdDelete className="text-xl text-red-600 cursor-pointer" />
        </Popconfirm>
      </td>
    </tr>
  );
};

export default DashboardUsersListItem;
