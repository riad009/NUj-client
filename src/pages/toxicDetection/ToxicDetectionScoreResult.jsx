import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";
import ToxicDetectionScoreTable from "../../components/toxicDetection/ToxicDetectionScoreTable";
import ToxicDetectionSuccessScoreTable from "../../components/toxicDetection/ToxicDetectionSuccessScoreTable";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../../components/LoadingScreen";
import { toast } from "sonner";
import config from "../../config";

const ToxicDetectionScoreResult = () => {
  const { assessmentObject } = useContext(AuthContext);
  const [response1, setResponse1] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = config.openai_key;
  const apiUrl = config.openai_api_url;

  let prompt1 = `
  Analyze the importance ratings provided by the user for each option and generate a score based on their ratings:
  Education:${assessmentObject?.education}
  Employment:${assessmentObject?.employment}
  Relationships:${assessmentObject?.relationships}
  Children:${assessmentObject?.children}
  Faith:${assessmentObject?.faith}
  Success:${assessmentObject?.success}
  Safety:${assessmentObject?.safety}
  Survival:${assessmentObject?.survival}
  Food:${assessmentObject?.food}
  Shelter:${assessmentObject?.shelter}
  Provide a score from 1 to 10 based on the user's ratings, considering the importance of each option.

  Provide only the numerical score from 1 to 10 based on the user's ratings.
  Please return only number. Don't give anything else. I want only number
  `;

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        };

        const data1 = {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt1 }],
        };

        const [response1] = await Promise.all([
          axios.post(apiUrl, data1, { headers }),
        ]);

        setResponse1(response1.data.choices[0].message.content);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
        setError("An error occurred. Please try again.");
      }
    };
    handleSubmit();
  }, [apiKey, apiUrl, prompt1]);

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return toast.error(error, { duration: 8000, id: "response1" });
  }
  console.log(response1);
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
                  <h2 className="text-7xl">{response1}</h2>
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
              {response1 ? (
                <Link
                  to={`/toxic-detection/plan-result/${response1}`}
                  className="p-btn"
                >
                  Plans
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionScoreResult;
