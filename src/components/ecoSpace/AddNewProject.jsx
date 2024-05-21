import { Form, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { toast } from "sonner";
import config from "../../config";
import axios from "axios";

const AddNewProject = ({ open, setOpen, ecoSpace, refetch }) => {
  const [projectName, setProjectName] = useState("");

  const handleAdd = async () => {
    if (projectName) {
      try {
        await axios.post(`${config.api_url}/project/create`, {
          email: ecoSpace?.email,
          ecoSpaceId: ecoSpace?._id,
          projectName,
        });

        setProjectName("");
        setOpen(!open);
        refetch();
        toast.success("Project Created!");
      } catch (error) {
        toast.success("Something went wrong while creating project!");
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
            <button className="p-btn" type="submit" onClick={handleAdd}>
              Add
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewProject;
