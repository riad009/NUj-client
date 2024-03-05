import React from "react";

const CoworkerListCard = ({ coworker }) => {
  const { _id, email, image } = coworker ?? {};
  return (
    <div className="flex gap-2 items-center">
      <img className="size-6 rounded-lg" src={image} alt="" />
      <p className="text-sm">{email}</p>
    </div>
  );
};

export default CoworkerListCard;
