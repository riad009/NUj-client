import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const CreateEcoSpaceS3 = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 3 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is the Address & Website of your Company/ Organization?
      </h1>
      <p className="text-sm">
        Provide a valid address of the comapny and website URL for better
        Communication.
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
          <label>Address: </label>
          <Form.Item
            className=" "
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter address!",
              },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent text-gray-200 w-full focus:bg-transparent"
              placeholder="xyz, 123"
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 text-white">
          <label>Website URL: </label>
          <Form.Item
            className=" "
            name="website"
            rules={[
              {
                required: true,
                message: "Please enter website URL!",
              },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent text-gray-200 w-full focus:bg-transparent"
              placeholder="URL"
            />
          </Form.Item>
        </div>

        <Link
          to="/create-eco-space/s4"
          type="submit"
          className="p-btn !bg-accent"
        >
          Next
        </Link>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS3;
