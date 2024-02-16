import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const CreateEcoSpaceS2 = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 2 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is the Email & Phone of your Company/ Organization?
      </h1>
      <p className="text-sm">
        Provide a valid email address to receive important notifications about
        your ecospace. Please provide a phone number that can be used for
        contacting you
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
          <label>Email: </label>
          <Form.Item
            className=" "
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter email!",
              },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent text-gray-200 w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="xyz@example.com"
              type="email"
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 text-white">
          <label>Phone: </label>
          <Form.Item
            className=" "
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter phone!",
              },
            ]}
          >
            <Input
              size="large"
              className="bg-transparent text-gray-200 w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="tel"
            />
          </Form.Item>
        </div>

        <Link
          to="/create-eco-space/s3"
          type="submit"
          className="p-btn !bg-accent"
        >
          Next
        </Link>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS2;
