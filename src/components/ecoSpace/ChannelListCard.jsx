import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChannelListCard = ({ ecoSpaceId, channelName, _id }) => {
  return (
    <Link
      to={`/eco-space/${ecoSpaceId}/${_id}`}
      className="flex gap-2 items-center text-gray-300"
    >
      <FaHashtag className="size-4" />
      <p className="text-sm">{channelName}</p>
    </Link>
  );
};

export default ChannelListCard;
