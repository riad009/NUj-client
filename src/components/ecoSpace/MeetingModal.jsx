import { Button, Modal } from "antd";
import axios from "axios";

import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import config from "../../config";

const MeetingModal = ({ open, setOpen, project, ecoSpace }) => {
  const { userDB } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  console.log({ project });

  const authEndpoint = "https://nuj-zoom-server.vercel.app";
  // const authEndpoint = "http://localhost:4000";

  const userName = userDB?.name;
  const userEmail = userDB?.email;
  const sdkKey = "URi7OMjzRqefngyTz2K2qQ";
  const getSignature = async () => {
    try {
      setLoading(true);
      const result = await axios.post(`${authEndpoint}/create-meeting`, {
        meetingName: project?.projectName,
      });
      console.log("result", result?.data);

      if (result?.data?.id) {
        const response = await axios.post(authEndpoint, {
          meetingNumber: `${result?.data?.id}`,
          role: 1,
        });

        if (response.data.signature) {
          navigate(
            `/meeting?name=${userName}&email=${userEmail}&pwd=nuj&mn=${result?.data?.id}&sdkKey=${sdkKey}&signature=${response.data.signature}&role=1`
          );
          handleSend(result?.data?.join_url);
          setLoading(false);
        }
      }

      // startMeeting(response.data.signature);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  const handleSend = async (link) => {
    console.log({ link });
    try {
      const zoomInviteHTML = `
        <div>
          <h3>Zoom Meeting Invitation</h3>
          <p>Join our Zoom meeting by clicking the link below:</p>
          <a href="${link}" target="_blank" rel="noopener noreferrer" style="color: blue; text-decoration: underline;">
        Join Zoom Meeting
      </a>
        </div>
      `;

      const formData = new FormData();
      formData.append("email", userDB?.email);
      formData.append("ecoSpaceId", ecoSpace?._id);
      formData.append("projectId", project?._id);
      formData.append("userImage", userDB?.photo);
      formData.append("message", zoomInviteHTML);

      await axios.post(
        `${config.api_url}/message/create?type=meeting`,
        formData
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Modal
      title="Initiate a meeting"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={350}
      footer={null}
    >
      <div className="overflow-y-auto flex flex-col justify-center items-center gap-2 ">
        <img src="/zoom.svg" alt="zoom" className="w-20 py-3" />

        <p>
          Once you start a meeting, the meeting link will be sent to the members
          of your project.
        </p>
        <Button
          disabled={loading}
          type="primary"
          className="bg-blue-500 w-full"
          onClick={getSignature}
        >
          {loading ? "Creating..." : "Create Meeting"}
        </Button>
        <Button onClick={() => setOpen(!open)} className="w-full">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};
export default MeetingModal;
