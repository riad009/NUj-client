import React from "react";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";
import { Link } from "react-router-dom";
import planImage from "../../assets/home/plan-action.png";

const ToxicDetectionActionPlan = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-20 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-xl md:text-3xl font-semibold">
          Comprehensive Success Plan Results
        </h1>
        <div className="space-y-12">
          <UserProfileInformation />
          <div>
            <h1 className="text-base md:text-xl mb-4">
              Congratulations Below are your Action Plans
            </h1>
            <div className="space-y-8">
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-3xl">
                  <img className="h-full w-full" src={planImage} alt="" />
                </div>
                <div className="text-xl col-span-6 border border-gray-500 p-5 rounded-sm flex items-center justify-center">
                  <span className="font-bold">Program Recomendation 1</span>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-3xl">
                  <img className="h-full w-full" src={planImage} alt="" />
                </div>
                <div className="text-xl col-span-6 border border-gray-500 p-5 rounded-sm flex items-center justify-center">
                  <span className="font-bold">Program Recomendation 2</span>
                </div>
              </div>
              <div className="grid grid-cols-8 gap-5">
                <div className="col-span-2 border border-gray-500 flex justify-center items-center p-5 rounded-3xl">
                  <img className="h-full w-full" src={planImage} alt="" />
                </div>
                <div className="text-xl col-span-6 border border-gray-500 p-5 rounded-sm flex items-center justify-center">
                  <span className="font-bold">Program Recomendation 3</span>
                </div>
              </div>
              <div className="text-center space-y-2">
                <Link to="/toxic-detection/action-plan" className="p-btn">
                  Schedule
                </Link>
                <p className="text-xs text-gray-500">Schedule Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionActionPlan;
