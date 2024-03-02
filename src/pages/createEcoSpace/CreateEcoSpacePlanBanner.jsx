import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CreateEcoSpacePlanBanner = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      {/* <h4 className="text-xs text-gray-200">Step 6 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">EcoSpace Plans</h1>
      <p className="text-sm">
        Are you ready to choose an EcoSpace plan now or continue for free?
      </p>
      <div className="">
        <Link to="/create-eco-space/plans" type="submit" className="p-btn ">
          Continue To EcoSpace Plan
        </Link>
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

export default CreateEcoSpacePlanBanner;
