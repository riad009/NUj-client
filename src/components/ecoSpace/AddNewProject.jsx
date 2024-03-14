import { Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

const AddNewProject = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        title="Add New Project"
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
              <label>Project Name: </label>
              <Form.Item
                className="mb-1"
                name="project"
                rules={[
                  {
                    required: true,
                    message: "Provide a Project Name",
                  },
                ]}
              >
                <TextArea rows={4} required />
              </Form.Item>
            </div>
          </div>
          <div className="text-end">
            <button
              className="p-btn"
              type="submit"
              onClick={() => setOpen(false)}
            >
              Add
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewProject;
