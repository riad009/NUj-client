import { useState } from "react";
import { Form, Modal } from "antd";

import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import config from "../../config";

import axios from "axios";
const AddChannelModal = ({ open, setOpen, ecoSpace, refetch }) => {
  const [channelName, setChannelName] = useState("");

  const handleInvite = async () => {
    if (channelName) {
      try {
        await axios.post(`${config.api_url}/channel/create`, {
          email: ecoSpace?.email,
          ecoSpaceId: ecoSpace?._id,
          channelName,
        });

        setChannelName("");
        setOpen(!open);
        refetch();
        toast.success("Created!");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  return (
    <>
      <Modal
        title="Create new channel"
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
              <label>Channel Name: </label>
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
                  onChange={(e) => setChannelName(e.target.value)}
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
export default AddChannelModal;
