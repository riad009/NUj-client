import { Form, Input, Tag } from "antd";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BackButton from "../../components/BackButton";

const CreateEcoSpaceS6 = () => {
  const { newEcoSpaceData, setNewEcoSpaceData } = useContext(AuthContext);
  const [projectName, setProjectName] = useState("");
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const handleCreateEcoSpace6 = (data) => {
    if (!projects?.length) {
      return toast.error("Add atleast one project name");
    }
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      projects,
    }));
    navigate("/create-eco-space/plans/banner");
  };

  const handleAddProject = async () => {
    if (projectName && !projects.includes(projectName)) {
      setProjects((prevValues) => [...prevValues, projectName]);
    } else if (projects.includes(projectName)) {
      toast.error("Project already added", { id: "project" });
    } else {
      toast.error("Project is invalid", { id: "project" });
    }
  };

  const removeItem = (itemToRemove) => {
    const updatedItems = projects.filter((item) => item !== itemToRemove);
    setProjects(updatedItems);
  };

  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <div className="flex gap-2 items-center">
        <BackButton target={"/create-eco-space/s5"} />
        <h4 className="text-xs text-gray-500">Step 6 of 6</h4>
      </div>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is your EcoSpace Team Working on?
      </h1>
      <p className="text-sm">
        This could be anything: a project, campaign, event, or the deal you’re
        trying to close.
      </p>
      <Form
        className=""
        name="basic"
        initialValues={
          {
            // projects: newEcoSpaceData?.projects,
          }
        }
        autoComplete="off"
        onFinish={handleCreateEcoSpace6}
      >
        <div className="flex flex-col gap-1 ">
          <div>
            {projects?.length
              ? projects.map((item, i) => (
                  <Tag key={i} closeIcon onClose={() => removeItem(item)}>
                    {item}
                  </Tag>
                ))
              : ""}
          </div>
          <Form.Item
            className=" "
            name="projects"
            rules={[
              {
                required: false,
                message: "Please enter projects name!",
              },
            ]}
          >
            <Input
              allowClear
              onChange={(e) => setProjectName(e.target.value)}
              style={{ input: { color: "red" } }}
              size="large"
              className="bg-transparent  w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="Ex: budget, fire campaign"
            />
          </Form.Item>
        </div>

        <div>
          <button type="button" onClick={handleAddProject} className="p-btn">
            Add
          </button>
          <button type="submit" className="p-btn">
            Next
          </button>
        </div>

        {/* <Link
          // onClick={() => toast.success("Created successfully")}
          to="/create-eco-space/plans/banner"
          type="submit"
          className="p-btn"
        >
          Next
        </Link> */}
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS6;
