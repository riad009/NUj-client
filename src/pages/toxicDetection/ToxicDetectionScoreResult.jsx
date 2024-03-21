import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";
import ToxicDetectionScoreTable from "../../components/toxicDetection/ToxicDetectionScoreTable";
import ToxicDetectionSuccessScoreTable from "../../components/toxicDetection/ToxicDetectionSuccessScoreTable";
import { Link } from "react-router-dom";

const ToxicDetectionScoreResult = () => {
  const { assessmentObject } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-20 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-xl md:text-3xl font-semibold">
          Success Plan Scoring Result
        </h1>
        <div className="space-y-12">
          <UserProfileInformation />
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="">
                <ToxicDetectionScoreTable assessmentObject={assessmentObject} />
              </div>
              <div className="space-y-5">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-7xl">5</h2>
                  <p>Score</p>
                </div>
                <div className="">
                  <ToxicDetectionSuccessScoreTable />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500">
                Click here for action plans*
              </p>
              <Link to="/toxic-detection/plan-result" className="p-btn">
                Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionScoreResult;
