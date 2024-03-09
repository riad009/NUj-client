import React from "react";
import { FaHashtag } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChannelListCard = ({ title, _id }) => {
  return (
    <Link className="flex gap-2 items-center text-gray-300">
      {/* <img className="size-6 rounded-lg" src={unknown} alt="" /> */}
      <FaHashtag className="size-4" />
      <p className="text-sm">{title}</p>
    </Link>
  );
};

export default ChannelListCard;
