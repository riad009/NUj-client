import axios from "axios";
import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import config from "../../config";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AcceptInvitation = () => {
  const { id, type, email } = useParams();
  const navigate = useNavigate();
  const { userDB } = useContext(AuthContext);

  useEffect(() => {
    if (!/^[a-fA-F0-9]{24}$/.test(id)) {
      console.log("Invalid id");
      navigate("/");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Invalid email address");
      navigate("/");
      return;
    }

    if (userDB?.email !== email) {
      navigate("/");
      return;
    }
  }, [id, email, navigate, userDB?.email]);

  const handleAccept = async () => {
    if (email) {
      try {
        if (type === "eco-space") {
          const res = await axios.patch(
            `${config.api_url}/eco-spaces/accept-invite`,
            {
              email,
              ecoSpaceId: id,
            }
          );
          const result = res.data.data;

          toast.success("Invitation accepted!");
          navigate("/");
          console.log({ result });
        } else if (type === "project") {
          const res = await axios.patch(
            `${config.api_url}/project/accept-invite`,
            {
              email,
              projectId: id,
            }
          );
          const result = res.data.data;

          toast.success("Invitation accepted!");
          navigate("/");
          console.log({ result });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <div className="flex gap-4 justify-center items-center min-h-screen">
      <Link
        to="/"
        className="py-2 px-4 rounded-sm shadow-sm bg-red-600 text-white"
      >
        Reject
      </Link>
      <button
        className="py-2 px-4 rounded-sm shadow-sm bg-green-600 text-white"
        onClick={handleAccept}
      >
        Accept
      </button>
    </div>
  );
};

export default AcceptInvitation;
