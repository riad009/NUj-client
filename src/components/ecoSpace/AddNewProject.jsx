import { Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { toast } from "sonner";
import config from "../../config";

const AddNewProject = ({ open, setOpen, ecoSpace, refetchEcoSpace }) => {
  const [projectName, setProjectName] = useState("");

  const handleInvite = async () => {
    if (projectName) {
      try {
        const res = await fetch(
          `${config.api_url}/eco-spaces/add-project/eco-space/${ecoSpace?._id}`,
          {
            method: "PATCH",
            headers: { "content-type": "Application/json" },
            body: JSON.stringify({ project: projectName }),
          }
        );
        const data = await res.json();
        if (!data.success) {
          return toast.error("Something went wrong");
        }
        setProjectName("");
        setOpen(!open);
        refetchEcoSpace();
        toast.success("Created!");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
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
                <TextArea
                  rows={4}
                  required
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="text-end">
            <button className="p-btn" type="submit" onClick={handleInvite}>
              Add
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewProject;
