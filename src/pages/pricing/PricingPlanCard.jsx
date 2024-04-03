import React, { useContext } from "react";
import { toast } from "sonner";
import config from "../../config";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const PricingPlanCard = ({ plan }) => {
  const { title, description, price, _id } = plan;

  const { userDB } = useContext(AuthContext);

  const handlePurchasePlan = (data) => {
    const payload = {
      plan: title,
    };

    fetch(`${config.api_url}/users/update-user/${userDB?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Purchaded Successfully!");
        }
      })
      .catch((err) => {
        toast.error(err.message || data.message, { id: "profile" });
      });
  };

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

        <button
          onClick={() => handlePurchasePlan(title)}
          className="p-btn w-full"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;
