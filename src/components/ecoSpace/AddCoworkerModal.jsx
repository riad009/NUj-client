import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import config from "../../config";
import { useNavigate } from "react-router-dom";
const AddCoworkerModal = ({ open, setOpen, ecoSpace }) => {
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
                <TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <div className="text-end">
            <button className="p-btn" type="submit">
              Send
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddCoworkerModal;
