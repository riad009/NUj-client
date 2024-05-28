import React, { useContext, useEffect, useState } from "react";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";
import LoadingScreen from "../../components/LoadingScreen";
import axios from "axios";
import config from "../../config";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ToxicDetectionPlanScoreResult = () => {
  const rating = useLoaderData();
  const { assessmentObject, userDB } = useContext(AuthContext);
  const [response2, setResponse2] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = config.openai_key;
  const apiUrl = config.openai_api_url;

  let prompt2 = `
  Analyze the importance ratings provided by ${userDB?.name} for each option and generate a success plan based on their ratings:
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

Provide a success plan based on the user's ratings.`;

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoading(true);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        };

        const data2 = {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt2 }],
        };

        const [response1] = await Promise.all([
          axios.post(apiUrl, data2, { headers }),
        ]);

        setResponse2(response1.data.choices[0].message.content);
        setLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setLoading(false);
        setError("An error occurred. Please try again.");
      }
    };
    handleSubmit();
  }, [apiKey, apiUrl, prompt2]);

  const doc = new jsPDF();
  const printPdf = () => {
    doc.text(`Comprehensive Success Plan Results - ${userDB?.name}`, 15, 10);
    autoTable(doc, {
      head: [["Plans"]],
      body: [[response2]],
    });

    doc.save(`plans_${userDB?.name}.pdf`);
  };

  if (loading) {
    return <LoadingScreen />;
  }
  if (error) {
    return toast.error(error, { duration: 8000, id: "response1" });
  }

  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-20 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-xl md:text-3xl font-semibold">
          Comprehensive Success Plan Results
        </h1>
        <div className="space-y-12">
          <UserProfileInformation />
          <div className="space-y-8">
            {rating >= 12 && (
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
            )}
            {rating > 9 && rating < 12 && (
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
            )}
            {rating >= 7 && rating <= 9 && (
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
            )}
            {rating < 7 && (
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
            )}
            <div className="text-center space-y-2">
              {/* <Link to="/assessment/action-plan" className="p-btn">
                Download
              </Link> */}
              {response2 ? (
                <button onClick={printPdf} className="p-btn">
                  Download
                </button>
              ) : (
                ""
              )}

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
