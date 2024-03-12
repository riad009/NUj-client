import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import config from "../../config";

const CreateEcoSpaceNotificationConsent = () => {
  const { newEcoSpaceData, setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCreateEcoSpaceFinal = () => {
    fetch(`${config.api_url}/eco-spaces/create-eco-space`, {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newEcoSpaceData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, { id: "create-eco-space" });
          return navigate("/profile/eco-space/list");
        } else {
          toast.error("Something went wrong", { id: "create-eco-space" });
          // return navigate("/profile/eco-space/list");
        }
      })
      .catch((err) =>
        toast.error(err.message || "Something went wrong", {
          id: "create-eco-space",
        })
      );
  };

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
          I agree to receive notifications from NUj
        </label>
      </div>
      <button onClick={handleCreateEcoSpaceFinal} className="p-btn" to="/">
        Finish
      </button>
      {/* <Link
        onClick={() =>
          toast.success("EcoSpace created successfully", { duration: 5000 })
        }
        className="p-btn"
        to="/"
      >
        Finish
      </Link> */}
    </div>
  );
};

export default CreateEcoSpaceNotificationConsent;
