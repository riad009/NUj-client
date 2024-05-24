import { useState } from "react";
import { Form, Modal } from "antd";

import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import config from "../../config";

import axios from "axios";
import { queryClient } from "../../main";
const AddCoworkerModal = ({ open, setOpen, ecoSpace }) => {
  const [email, setEmail] = useState("");
  const [loading, setloading] = useState(false);
  const handleInvite = async () => {
    if (email) {
      try {
        setloading(true);
        const res = await axios.patch(
          `${config.api_url}/eco-spaces/accept-invite`,
          {
            email: email.toLowerCase(),
            ecoSpaceId: ecoSpace._id,
          }
        );

        if (res?.status === 200) {
          await queryClient.refetchQueries({
            queryKey: ["eco-space"],
            type: "active",
          });
          setEmail("");
          setloading(false);
          setOpen(!open);
          toast.success("Co-worker added!");
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
  // const handleInvite = async () => {
  //   if (email) {
  //     try {
  //       setloading(true);
  //       const res = await axios.post(`${config.api_url}/eco-spaces/invite`, {
  //         email,
  //         ecoSpaceId: ecoSpace._id,
  //         ecoSpaceName: ecoSpace.company,
  //         type: "eco-space",
  //       });

  //       if (res?.status === 200) {
  //         setEmail("");
  //         setloading(false);
  //         setOpen(!open);
  //         toast.success("Invited!");
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

  return (
    <>
      <Modal
        title="Invite People to EcoSpace"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
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
              {loading ? "Adding.." : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddCoworkerModal;
