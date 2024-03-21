import ChooseImportance from "../../components/toxicDetection/ChooseImportance";
import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";

const ToxicDetectionAssessment = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-20 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-xl md:text-3xl font-semibold">
          Comprehensive Success Plan Assessment
        </h1>
        <div className="space-y-8">
          <UserProfileInformation />
          <ChooseImportance />
        </div>
      </div>
    </div>
  );
};

export default ToxicDetectionAssessment;
