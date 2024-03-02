import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CreateEcoSpaceNotificationConsent = () => {
  const { setNewEcoSpaceData } = useContext(AuthContext);
  return (
    <div className="w-full md:w-[60%] space-y-5">
      {/* <h4 className="text-xs text-gray-200">Step 1 of 6</h4> */}
      <h1 className="text-2xl md:text-4xl font-semibold">
        Stay in contact with EcoSpace Updates
      </h1>
      <div className="flex flex-col gap-1 ">
        <label>Example: </label>
        <p className="text-gray-500">A participant sent you request.</p>
        <p className="text-gray-500">A team member sent you request.</p>
      </div>
      <div className="space-x-1  text-xl">
        <input
          type="checkbox"
          name="notification_consent"
          id="notifcation-consent"
          className="cursor-pointer"
          defaultChecked={true}
          onChange={(e) =>
            setNewEcoSpaceData((prevValues) => ({
              ...prevValues,
              ecoSpaceNotify: Boolean(e.target.value),
            }))
          }
        />
        <label className="cursor-pointer" htmlFor="notifcation-consent">
          I agree to receive notifications from VREMCAST
        </label>
      </div>
      <Link
        onClick={() =>
          toast.success("EcoSpace created successfully", { duration: 5000 })
        }
        className="p-btn"
        to="/"
      >
        Finish
      </Link>
    </div>
  );
};

export default CreateEcoSpaceNotificationConsent;
