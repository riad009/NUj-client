import { useContext } from "react";
import logo from "../../assets/logos/main-logo.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const OrganizationServices = () => {
  const { orgFormValues, setOrgFormValues } = useContext(AuthContext);

  const handleRegisterOrganization = () => {
    console.log(orgFormValues);
  };

  return (
    <div className="">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img className="h-[50%] w-[50%]" src={logo} alt="" />
        </div>
        <h2 className="text-xl text-center">Organization Services</h2>
        <div className="space-y-4 my-5">
          <div className="flex flex-col justify-center items-center gap-4">
            <button
              onClick={() =>
                setOrgFormValues((prevState) => ({
                  ...prevState,
                  service: "Diversion Program",
                }))
              }
              className="p-btn w-full"
            >
              Diversion Program
            </button>
            <button
              onClick={() =>
                setOrgFormValues((prevState) => ({
                  ...prevState,
                  service: "Behavioral Health",
                }))
              }
              className="p-btn w-full"
            >
              Behavioral Health
            </button>
            <button
              onClick={() =>
                setOrgFormValues((prevState) => ({
                  ...prevState,
                  service: "Mental Health",
                }))
              }
              className="p-btn w-full"
            >
              Mental Health
            </button>
            <button
              onClick={() =>
                setOrgFormValues((prevState) => ({
                  ...prevState,
                  service: "Re-Entry",
                }))
              }
              className="p-btn w-full"
            >
              Re-Entry
            </button>
            <button
              onClick={() =>
                setOrgFormValues((prevState) => ({
                  ...prevState,
                  service: "Children & Family",
                }))
              }
              className="p-btn w-full"
            >
              Children & Family
            </button>
          </div>
          <div className="">
            <button onClick={handleRegisterOrganization} className="p-btn-sm">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationServices;
