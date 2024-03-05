import React, { useEffect, useState } from "react";
import config from "../../config";
import PricingPlanCard from "./PricingPlanCard";

const PricingBanner = () => {
  const [plans, setPlans] = useState(null);
  useEffect(() => {
    fetch(`${config.api_url}/plans/all`)
      .then((res) => res.json())
      .then((data) => {
        setPlans(data.data);
      });
  }, []);
  return (
    <div className="w-11/12 mx-auto space-y-5 mt-24 mb-10">
      {/* <h4 className="text-xs text-gray-200">Step 6 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">
        Choose the right EcoSpace EcoSystem for your Organization.
      </h1>
      <p className="text-sm">Monthly Plans</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {plans?.length
          ? plans.map((plan, i) => <PricingPlanCard key={i} plan={plan} />)
          : ""}
      </div>
    </div>
  );
};

export default PricingBanner;
