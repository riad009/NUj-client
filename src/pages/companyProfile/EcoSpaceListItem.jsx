import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { Link } from "react-router-dom";
import { Popconfirm } from "antd";
import axios from "axios";
import config from "../../config";
import { toast } from "sonner";

const EcoSpaceListItem = ({ ecoSpace, refetch }) => {
  const { company, coWorkers, _id, owner } = ecoSpace ?? {};
  const { userDB } = useContext(AuthContext);

  const isOwner = userDB?._id === owner;

  const confirmDelete = async () => {
    try {
      const res = await axios.delete(
        `${config.api_url}/eco-spaces/delete/eco-space/${_id}`
      );

      if (res?.status === 200) {
        refetch();
        toast.success("Eco space deleted!", {
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
    <div className="bg-white flex flex-col md:flex-row justify-between items-start md:items-center p-5 gap-2 rounded-lg">
      <div className="">
        <h2 className="text-2xl md:text-lg">
          {company} ({isOwner ? "Owner" : "Member"})
        </h2>
        <div className="flex gap-1 items-center">
          <img className="size-10 rounded-box " src={userDB?.photo} alt="" />
          <p>{coWorkers.length} members</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link to={`/eco-space/${_id}`} className="p-btn w-full md:w-auto">
          Visit EcoSpace
        </Link>

        {(isOwner || userDB?.role === "superAdmin") && (
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
            <button className="delete-btn w-full md:w-auto ">Delete</button>
          </Popconfirm>
        )}
      </div>
    </div>
  );
};

export default EcoSpaceListItem;
