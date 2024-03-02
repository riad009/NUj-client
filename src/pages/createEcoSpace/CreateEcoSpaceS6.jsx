import { Form, Input } from "antd";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CreateEcoSpaceS6 = () => {
  const { setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateEcoSpace6 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      project: data.project,
    }));

    navigate("/create-eco-space/plans/banner");
  };
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-500">Step 6 of 6</h4>
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
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace6}
      >
        {/* name */}
        <Form.Item
          className=" "
          name="project"
          rules={[
            {
              required: true,
              message: "Please enter current project name!",
            },
          ]}
        >
          <Input
            style={{ input: { color: "red" } }}
            size="large"
            className="bg-transparent  w-full focus:bg-transparent placeholder:text-gray-500"
            placeholder="Ex: budget, fire campaign"
          />
        </Form.Item>

        <button type="submit" className="p-btn">
          Next
        </button>
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
