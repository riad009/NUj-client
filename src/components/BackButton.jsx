import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackButton = ({ title, target }) => {
  return (
    <Link to={target} className="">
      <FaArrowAltCircleLeft className="size-5 text-gray-500" />
    </Link>
  );
};

export default BackButton;
