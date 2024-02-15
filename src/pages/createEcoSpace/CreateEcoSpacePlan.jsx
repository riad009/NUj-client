import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CreateEcoSpacePlan = () => {
  return (
    <div className="w-11/12 md:w-[90%] space-y-5">
      {/* <h4 className="text-xs text-gray-200">Step 6 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">
        Choose the right EcoSpace EcoSystem for your Organization.
      </h1>
      <p className="text-sm">Monthly Plans</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="">
          <div className="bg-primary p-8 rounded-t-2xl h-48">
            <h2 className="text-2xl font-semibold">Square</h2>
            <p className="font-light">small teams cohort connectivity</p>
          </div>
          <div className="bg-[#17191c] p-8 space-y-5">
            <h1 className="text-3xl font-semibold">$0.00 USD</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                non a est? Voluptates incidunt, nulla excepturi quae enim omnis
                nesciunt vero aut vel id optio,
              </p>
            </div>
            <Link
              to="/create-eco-space/notification/consent"
              className="p-btn w-full"
            >
              Continue
            </Link>
          </div>
        </div>

        <div className="">
          <div className="bg-[#0b4c8c] p-8 rounded-t-2xl h-48">
            <h2 className="text-2xl font-semibold">BlockClub</h2>
            <p className="font-light">
              Scake across multiple cohorts & service providers 10 - 100
            </p>
          </div>
          <div className="bg-[#17191c] p-8 space-y-5">
            <h1 className="text-3xl font-semibold">$0.00 USD</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                non a est? Voluptates incidunt, nulla excepturi quae enim omnis
                nesciunt vero aut vel id optio,
              </p>
            </div>
            <Link
              to="/create-eco-space/notification/consent"
              className="p-btn w-full"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="">
          <div className="bg-[#0b2440] p-8 rounded-t-2xl h-48">
            <h2 className="text-2xl font-semibold">EcoSpace Enterprise</h2>
            <p className="font-light">
              Most complex EcoSystem with ability to collaborate across multiple
              Locations, Organizations, Cohorts & Services.
            </p>
          </div>
          <div className="bg-[#17191c] p-8 space-y-5">
            <h1 className="text-3xl font-semibold">$0.00 USD</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                non a est? Voluptates incidunt, nulla excepturi quae enim omnis
                nesciunt vero aut vel id optio,
              </p>
            </div>
            <Link
              to="/create-eco-space/notification/consent"
              className="p-btn w-full"
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-200">
        <Link to="/create-eco-space/notification/consent" className="link">
          Skip
        </Link>{" "}
        & Continue with the free plan
      </p>
    </div>
  );
};

export default CreateEcoSpacePlan;
