import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import config from "../../config";
import CreateEcoSpacePlanCard from "./CreateEcoSpacePlanCard";
import LoadingScreen from "../../components/LoadingScreen";

const CreateEcoSpacePlan = () => {
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`${config.api_url}/plans/all`)
      .then((res) => res.json())
      .then((data) => {
        setPlans(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="w-11/12 mx-auto space-y-5">
      {/* <h4 className="text-xs text-gray-200">Step 6 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">
        Choose the right Ecospace Ecosystem for your Organization.
      </h1>
      <p className="text-sm">Monthly Plans</p>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {plans?.length
            ? plans.map((plan, i) => (
                <CreateEcoSpacePlanCard key={i} plan={plan} />
              ))
            : ""}
        </div>
      )}
    </div>
  );
};

export default CreateEcoSpacePlan;
