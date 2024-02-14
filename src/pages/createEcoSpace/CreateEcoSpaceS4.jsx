import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { Link } from "react-router-dom";

const CreateEcoSpaceS4 = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 4 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is the Service your Company/ Organization provides?
      </h1>
      <p className="text-sm">
        Select the service that best describes what your company or organization
        and provide braod description about it.
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
        <div className="flex flex-col gap-1 text-white">
          <label>Service: </label>
          <Form.Item
            name="serviceTitle"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select placeholder="Select a Service" allowClear>
              <Option value="Diversion Program">Diversion Program</Option>
              <Option value="Behavioral Health">Behavioral Health</Option>
              <Option value="Supporttive Services">Supporttive Services</Option>
              <Option value="Mental Health">Mental Health</Option>
              <Option value="Reentry">Reentry</Option>
              <Option value="Children & Family Services">
                Children & Family Services
              </Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 text-white">
          <label>Description: </label>
          <Form.Item
            className=""
            name="serviceDescription"
            rules={[
              {
                required: true,
                message: "Please enter a Description!",
              },
            ]}
          >
            <Input
              className="h-20 bg-transparent text-gray-200 focus:bg-transparent"
              size="large"
              placeholder="Details of company provided services"
            />
          </Form.Item>
        </div>

        <Link
          to="/create-eco-space/s5"
          type="submit"
          className="p-btn !bg-accent"
        >
          Next
        </Link>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS4;
