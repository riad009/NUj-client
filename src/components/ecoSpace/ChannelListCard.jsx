import { FaHashtag } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const ChannelListCard = ({ ecoSpaceId, channelName, _id }) => {
  return (
    <>
      <NavLink
        to={`/eco-space/${ecoSpaceId}/${_id}`}
        // className="flex gap-2 items-center"
        className={({ isActive, isPending }) =>
          `flex items-center gap-2 rounded-lg p-2 ${
            isActive ? "bg-[#83388b] text-white" : ""
          }`
        }
      >
        <FaHashtag className="size-4" />
        <p className="text-sm">{channelName}</p>
      </NavLink>
    </>
  );
};

export default ChannelListCard;
