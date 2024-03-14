import React from "react";
import { NavLink } from "react-router-dom";
import { GoProject } from "react-icons/go";

const ProjectListCard = ({ project }) => {
  return (
    <>
      <NavLink
        // to={`/eco-space/${ecoSpaceId}/${_id}`}
        // className="flex gap-2 items-center"
        // className={({ isActive, isPending }) =>
        //   `flex items-center gap-2 rounded-lg p-2 ${
        //     isActive ? "bg-[#83388b] text-white" : ""
        //   }`
        // }
        className={`flex items-center gap-2 rounded-lg p-2`}
      >
        <GoProject className="size-4" />
        <p className="text-sm">{project}</p>
      </NavLink>
    </>
  );
};

export default ProjectListCard;
