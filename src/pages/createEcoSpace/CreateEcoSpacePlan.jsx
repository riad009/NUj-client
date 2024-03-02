import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import config from "../../config";
import CreateEcoSpacePlanCard from "./CreateEcoSpacePlanCard";

const CreateEcoSpacePlan = () => {
  const [plans, setPlans] = useState(null);
  useEffect(() => {
    fetch(`${config.api_url}/plans/all`)
      .then((res) => res.json())
      .then((data) => {
        setPlans(data.data);
      });
  }, []);
  return (
    <div className="w-full md:w-[90%] space-y-5">
      {/* <h4 className="text-xs text-gray-200">Step 6 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">
        Choose the right EcoSpace EcoSystem for your Organization.
      </h1>
      <p className="text-sm">Monthly Plans</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans.length
          ? plans.map((plan, i) => (
              <CreateEcoSpacePlanCard key={i} plan={plan} />
            ))
          : ""}
      </div>
      <p className="text-xs text-gray-500">
        <Link to="/create-eco-space/notification/consent" className="link">
          Skip
        </Link>{" "}
        & Continue with the free plan
      </p>
    </div>
  );
};

export default CreateEcoSpacePlan;
