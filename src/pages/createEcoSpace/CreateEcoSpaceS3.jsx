import { Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BackButton from "../../components/BackButton";

const CreateEcoSpaceS3 = () => {
  const { newEcoSpaceData, setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateEcoSpace3 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      address: data.address,
      website: data.website,
    }));

    navigate("/create-eco-space/s4");
  };
  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <div className="flex gap-2 items-center">
        <BackButton target={"/create-eco-space/s2"} />
        <h4 className="text-xs text-gray-500">Step 3 of 6</h4>
      </div>
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
          address: newEcoSpaceData?.address,
          website: newEcoSpaceData?.website,
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace3}
      >
        {/* name */}
        <div className="flex flex-col gap-1">
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
              className="bg-transparent  w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="xyz, 123"
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 ">
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
              className="bg-transparent  w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="URL"
            />
          </Form.Item>
        </div>

        <button type="submit" className="p-btn ">
          Next
        </button>
        {/* 
        <Link to="/create-eco-space/s4" type="submit" className="p-btn ">
          Next
        </Link> */}
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS3;
