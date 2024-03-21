import { Radio } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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

  return (
    <div>
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
