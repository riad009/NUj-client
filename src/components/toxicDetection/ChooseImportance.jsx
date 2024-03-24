import { Radio } from "antd";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";

const apiKey = "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"; // Replace with your OpenAI API key
const apiUrl = "https://api.openai.com/v1/chat/completions";
const ChooseImportance = () => {
  const { assessmentObject, setAssessmentObject } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAssessment = () => {
    const isReadyToProceed = [
      "education",
      "employment",
      "relationships",
      "children",
      "faith",
      "success",
      "safety",
      "survival",
      "food",
      "shelter",
    ].every((key) =>
      Object.prototype.hasOwnProperty.call(assessmentObject, key)
    );
    if (!isReadyToProceed) {
      return toast.error("Please complete the assessment", {
        id: "assessment",
      });
    }

    navigate("/toxic-detection/score-result");
  };

  // open AI
  //response 1- score
  const [prompt1, setPrompt1] = useState(`


  Analyze the importance ratings provided by the user for each option and generate a score based on their ratings:
  Education:5
  Employment:2
  Relationships:3
  Children:3
  Faith:6
  Success:
  Safety:8
  Survival:3
  Food:2
  Shelter:6
  Provide a score from 1 to 10 based on the user's ratings, considering the importance of each option.

  Provide only the numerical score from 1 to 10 based on the user's ratings.
  Please return only numbers. Don't give anything else. I want only numbers


  `);

  //response 2- details
  const [prompt2, setPrompt2] = useState(`
  
  Analyze the importance ratings provided by riad for each option and generate a success plan based on their ratings:
  Education:1
  Employment:2
  Relationships:10
  Children:3
  Faith:6
  Success:
  Safety:8
  Survival:3
  Food:2
  Shelter:6

Provide a success plan based on the user's ratings.


  
  `);
  const [response1, setResponse1] = useState("");
  const [response2, setResponse2] = useState("");
  const [error, setError] = useState("");

  const handlePrompt1Change = (event) => {
    setPrompt1(event.target.value);
  };

  const handlePrompt2Change = (event) => {
    setPrompt2(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      };

      const data1 = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt1 }],
      };

      const data2 = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt2 }],
      };

      const [response1, response2] = await Promise.all([
        axios.post(apiUrl, data1, { headers }),
        axios.post(apiUrl, data2, { headers }),
      ]);

      setResponse1(response1.data.choices[0].message.content);
      setResponse2(response2.data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };
  // open AI
  return (
    <div>
      <div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
        {error && <p>{error}</p>}
        {response1 && (
          <div>
            <h2>Response 1:</h2>
            <p>{response1}</p>
          </div>
        )}
        {response2 && (
          <div>
            <h2>Response 2:</h2>
            <p>{response2}</p>
          </div>
        )}
      </div>
      <h1 className="text-base md:text-xl mb-4">
        Please rate the following words based on their importance to you (1-10):
      </h1>
      <div className="space-y-5 md:space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Education: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  education: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.education}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Employment: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  employment: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.employment}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Relationships: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  relationships: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.relationships}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Children: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  children: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.children}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Faith: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  faith: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.faith}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Success: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  success: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.success}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Safety: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  safety: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.safety}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Survival: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  survival: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.survival}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Food: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  food: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.food}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h2 className=" tracking-wide">Shelter: </h2>
            <Radio.Group
              onChange={(e) =>
                setAssessmentObject((prev) => ({
                  ...prev,
                  shelter: e.target.value,
                }))
              }
              defaultValue={assessmentObject?.shelter}
            >
              {[...Array(10).keys()].map((index) => (
                <Radio key={index} value={index + 1}>
                  {index + 1}
                </Radio>
              ))}
            </Radio.Group>
          </div>
        </div>
        <div className="text-center">
          <button onClick={handleAssessment} className="p-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseImportance;
