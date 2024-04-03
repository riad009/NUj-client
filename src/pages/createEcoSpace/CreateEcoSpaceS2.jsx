import { Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import BackButton from "../../components/BackButton";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const CreateEcoSpaceS2 = () => {
  const { newEcoSpaceData, setNewEcoSpaceData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateEcoSpace2 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      email: data.email,
      phone: data.phone,
    }));

    navigate("/create-eco-space/s3");
  };

  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <div className="flex gap-2 items-center">
        <BackButton target={"/create-eco-space/s1"} />
        <h4 className="text-xs text-gray-500">Step 2 of 6</h4>
      </div>
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
          email: newEcoSpaceData?.email,
          phone: newEcoSpaceData?.phone,
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace2}
      >
        {/* name */}
        <div className="flex flex-col gap-1 ">
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
              className="bg-transparent w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="example@gmail.com"
              type="email"
            />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1">
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
              className="bg-transparent w-full focus:bg-transparent placeholder:text-gray-500"
              placeholder="tel"
            />
          </Form.Item>
        </div>

        <button type="submit" className="p-btn ">
          Next
        </button>
        {/* <Link to="/create-eco-space/s3" type="submit" className="p-btn ">
          Next
        </Link> */}
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS2;
