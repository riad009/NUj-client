import React from "react";
import unknown from "../../assets/home/unknown.jpg";

const CoworkerListCard = ({ coworker }) => {
  // const { email, image } = coworker ?? {};
  return (
    <div className="flex gap-2 items-center">
      <img className="size-6 rounded-lg" src={unknown} alt="" />
      <p className="text-sm">{coworker}</p>
    </div>
  );
};

export default CoworkerListCard;
