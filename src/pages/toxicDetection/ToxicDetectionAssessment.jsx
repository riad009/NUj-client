import UserProfileInformation from "../../components/toxicDetection/UserProfileInformation";

const ToxicDetectionAssessment = () => {
  return (
    <div className="min-h-screen flex justify-center items-center overflow-hidden mt-10 mb-6">
      <div className="w-11/12 mx-auto space-y-5">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Comprehensive Success Plan Assessment
        </h1>
        <UserProfileInformation />
      </div>
    </div>
  );
};

export default ToxicDetectionAssessment;
