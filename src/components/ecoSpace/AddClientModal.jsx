import { Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useContext, useState } from "react";
import { toast } from "sonner";
import config from "../../config";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AddClientModal = ({ projectData }) => {
  const { closeAddClientModal, openAddClient } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);

  // const handleInvite = async () => {
  //   if (email) {
  //     setloading(true);
  //     try {
  //       const res = await axios.patch(
  //         `${config.api_url}/project/accept-invite`,
  //         {
  //           email: email.toLowerCase(),
  //           projectId: projectData._id,
  //         }
  //       );

  //       if (res?.status === 200) {
  //         await queryClient.refetchQueries({
  //           queryKey: ["project"],
  //           type: "active",
  //         });
  //         setEmail("");
  //         setloading(false);
  //         closeAddClientModal();
  //         toast.success("Member Added!");
  //       }
  //     } catch (error) {
  //       setloading(false);
  //       console.error("Error fetching data:", error);
  //       return toast.error(
  //         error.response.data.message || `Something went wrong!`,
  //         {
  //           id: "login",
  //           duration: 2000,
  //           position: "top-center",
  //         }
  //       );
  //     }
  //   }
  // };
  const handleInvite = async () => {
    if (email) {
      setloading(true);
      try {
        const res = await axios.post(`${config.api_url}/project/invite`, {
          email,
          projectId: projectData._id,
          projectName: projectData?.projectName,
          type: "project",
        });

        if (res?.status === 200) {
          setEmail("");
          setloading(false);
          closeAddClientModal();
          toast.success("Invited!");
        }
      } catch (error) {
        setloading(false);
        console.error("Error fetching data:", error);
        return toast.error(
          error.response.data.message || `Something went wrong!`,
          {
            id: "login",
            duration: 2000,
            position: "top-center",
          }
        );
      }
    }
  };

  return (
    <>
      <Modal
        title={`Invite Client to project`}
        centered
        open={openAddClient}
        onOk={closeAddClientModal}
        onCancel={closeAddClientModal}
        width={800}
        // okText="Update"
        // okType="default"
        footer={null}
      >
        <Form
          className="space-y-5"
          name="basic"
          initialValues={{}}
          autoComplete="off"
        >
          {/* name */}
          <div className="w-full">
            <div className="flex flex-col gap-1 w-full">
              <label>To: </label>
              <Form.Item
                className="mb-1"
                name="coworker"
                rules={[
                  {
                    required: false,
                    message: "Provide a Description",
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="text-end">
            <button
              disabled={loading}
              className="p-btn"
              type="submit"
              onClick={handleInvite}
            >
              {loading ? "Sending.." : "Send"}
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddClientModal;
