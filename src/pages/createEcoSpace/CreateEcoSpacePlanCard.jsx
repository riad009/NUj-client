import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateEcoSpacePlanCard = ({ plan }) => {
  const { title, description, price, _id } = plan;
  const { setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handlePurchasePlan = (planId) => {
    setNewEcoSpaceData((prevValues) => ({
      ...prevValues,
      plan: planId,
      planPrice: Number(price),
    }));
    navigate("/create-eco-space/notification/consent");
  };

  return (
    <div className="shadow-lg">
      <div className="bg-primary p-6 rounded-t-2xl h-28 text-white ">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {/* <p className="font-light">small teams cohort connectivity</p> */}
      </div>
      <div className="h-64 p-6 space-y-5 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-semibold">${price} USD</h1>
          <p className="text-sm">{description}</p>
        </div>
        <button
          onClick={() => handlePurchasePlan(_id)}
          className="p-btn w-full"
        >
          Continue
        </button>
        {/* <Link
          to="/create-eco-space/notification/consent"
          className="p-btn w-full"
        >
          Continue
        </Link> */}
      </div>
    </div>
  );
};

export default CreateEcoSpacePlanCard;
