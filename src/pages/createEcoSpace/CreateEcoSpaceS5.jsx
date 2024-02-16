import { Form, Input } from "antd";
import { Link } from "react-router-dom";

const CreateEcoSpaceS5 = () => {
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-200">Step 5 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        Who else is in your xyz Ecospace?
      </h1>
      {/* <p className="text-sm">Add Coworker.</p> */}
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
          <label>Add Coworker by email </label>
          <Form.Item
            className=""
            name="staff"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input
              className="h-20 bg-transparent text-gray-200 focus:bg-transparent placeholder:text-gray-500"
              size="large"
              placeholder="Details of company provided services"
            />
          </Form.Item>
        </div>
        <div className="space-x-2">
          <Link
            to="/create-eco-space/s6"
            type="submit"
            className="p-btn !bg-accent"
          >
            Next
          </Link>

          <button to="/" type="submit" className="p-btn !bg-accent">
            Copy Invite Link
          </button>
        </div>
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS5;
