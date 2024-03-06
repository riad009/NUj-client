import { useState } from "react";
import { Form, Modal } from "antd";

import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import config from "../../config";

import axios from "axios";
const AddCoworkerModal = ({ open, setOpen, ecoSpace }) => {
  console.log(ecoSpace);
  const [email, setEmail] = useState("");

  const handleInvite = async () => {
    if (email) {
      try {
        const res = await axios.post(`${config.api_url}/eco-spaces/invite`, {
          email,
          ecoSpaceId: ecoSpace?.ecoSpace?._id,
          ecoSpaceName: ecoSpace?.ecoSpace?.company,
        });
        const result = res.data.data;

        setEmail("");
        setOpen(!open);
        toast.success("Invited!");

        console.log({ result });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

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
            <button className="p-btn" type="submit" onClick={handleInvite}>
              Send
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddCoworkerModal;
