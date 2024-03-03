import React from "react";

const PricingPlanCard = ({ plan }) => {
  const { title, description, price, _id } = plan;
  return (
    <div className="shadow-lg">
      <div className="bg-primary p-8 rounded-t-2xl h-32 text-white">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {/* <p className="font-light">small teams cohort connectivity</p> */}
      </div>
      <div className=" p-8 space-y-5">
        <h1 className="text-3xl font-semibold">${price} USD</h1>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlanCard;
