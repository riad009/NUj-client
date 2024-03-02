import { Form, Input } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const CreateEcoSpaceS1 = () => {
  const { setNewEcoSpaceData } = useContext(AuthContext);
  const handleCreateEcoSpace1 = (data) => {};

  return (
    <div className="w-full md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-500">Step 1 of 6</h4>
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
        onFinish={handleCreateEcoSpace1}
      >
        {/* name */}
        <Form.Item
          className=""
          name="company"
          rules={[
            {
              required: true,
              message: "Please enter Organization Name!",
            },
          ]}
        >
          <Input
            size="large"
            className="bg-transparent  w-full focus:bg-transparent placeholder:text-gray-500"
            placeholder="Ex: xyz company ltd."
            // onChange={(e) => console.log(e.target.value)}
          />
        </Form.Item>

        <button type="submit" className="p-btn">
          Next
        </button>
        {/* <Link to="/create-eco-space/s2" type="submit" className="p-btn">
          Next
        </Link> */}
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS1;
