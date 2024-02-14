import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const CreateEcoSpaceS1 = () => {
  return (
    <div className="w-full md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 1 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is the Name of your Company/ Organization?
      </h1>
      <p className="text-sm">
        This will be the name of your VREMCAST Ecospace — choose something that
        your team will recognize.
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
          name="orgName"
          rules={[
            {
              required: true,
              message: "Please enter Organization Name!",
            },
          ]}
        >
          <Input
            size="large"
            className="bg-transparent text-gray-200 w-full focus:bg-transparent"
            placeholder="Ex: xyz company ltd."
          />
        </Form.Item>

        <Link
          to="/create-eco-space/s2"
          type="submit"
          className="p-btn !bg-accent"
        >
          Next
        </Link>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS1;
