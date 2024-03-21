import React from "react";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";
import { Link } from "react-router-dom";

const ToxicDetectionPlanScoreResult = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-20 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-xl md:text-3xl font-semibold">
          Comprehensive Success Plan Results
        </h1>
        <div className="space-y-12">
          <UserProfileInformation />
          <div className="space-y-8">
            <div className="flex flex-col md:grid grid-cols-6 gap-2 md:gap-5">
              <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-sm md:rounded-3xl">
                <h2 className="text-2xl text-gray-500">Low</h2>
              </div>
              <div className="text-xl col-span-4 border border-gray-500 p-5 rounded-sm">
                <span className="font-bold">Score 12 or more</span>
                <p>
                  Goal Setting, Emplyment/Workforce Development, Positive
                  Relationships, Marriage & Family
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-6 gap-2 md:gap-5">
              <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-sm md:rounded-3xl">
                <h2 className="text-2xl text-gray-500">Moderate</h2>
              </div>
              <div className="text-xl col-span-4 border border-gray-500 p-5 rounded-sm">
                <span className="font-bold">Score 9 to 12</span>
                <p>
                  Goal Setting, Emplyment/Workforce Development, Positive
                  Relationships, Marriage & Family
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-6 gap-2 md:gap-5">
              <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-sm md:rounded-3xl">
                <h2 className="text-2xl text-gray-500">High</h2>
              </div>
              <div className="text-xl col-span-4 border border-gray-500 p-5 rounded-sm">
                <span className="font-bold">Score 7 to 9</span>
                <p>
                  Goal Setting, Emplyment/Workforce Development, Positive
                  Relationships, Marriage & Family
                </p>
              </div>
            </div>
            <div className="flex flex-col md:grid grid-cols-6 gap-2 md:gap-5">
              <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-sm md:rounded-3xl">
                <h2 className="text-2xl text-gray-500">Extreme</h2>
              </div>
              <div className="text-xl col-span-4 border border-gray-500 p-5 rounded-sm">
                <span className="font-bold">Score 6 or Less</span>
                <p>
                  Goal Setting, Emplyment/Workforce Development, Positive
                  Relationships, Marriage & Family
                </p>
              </div>
            </div>
            <div className="text-center space-y-2">
              <Link to="/toxic-detection/action-plan" className="p-btn">
                Download
              </Link>
              <p className="text-xs text-gray-500">
                Download your Success Plan!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionPlanScoreResult;
