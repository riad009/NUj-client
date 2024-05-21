import { DeleteOutlined } from "@ant-design/icons";
import { FaHashtag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ChannelListCard = ({ ecoSpaceId, projectName, _id }) => {
  return (
    <>
      <NavLink
        to={`/eco-space/${ecoSpaceId}/${_id}`}
        // className="flex gap-2 items-center"
        className={({ isActive }) =>
          `flex items-center justify-between gap-2 rounded-lg p-2 ${
            isActive ? "bg-[#83388b] text-white" : ""
          }`
        }
      >
        <div className="flex items-center gap-2">
          <FaHashtag className="size-4" />
          <p className="text-sm">{projectName}</p>
        </div>

        {/* <DeleteOutlined className="cursor-pointer" /> */}
      </NavLink>
    </>
  );
};

export default ChannelListCard;
