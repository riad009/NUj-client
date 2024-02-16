import { Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CreateEcoSpaceS6 = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 6 of 6</h4>
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
      >
        {/* name */}
        <Form.Item
          className=" "
          name="projectName"
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
            className="bg-transparent text-gray-200 w-full focus:bg-transparent placeholder:text-gray-500"
            placeholder="Ex: budget, fire campaign"
          />
        </Form.Item>

        <Link
          // onClick={() => toast.success("Created successfully")}
          to="/create-eco-space/plans/banner"
          type="submit"
          className="p-btn !bg-accent"
        >
          Next
        </Link>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS6;
