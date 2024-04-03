import { Form, Input } from "antd";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import TextArea from "antd/es/input/TextArea";

const CreateEcoSpaceS1 = () => {
  const { newEcoSpaceData, setNewEcoSpaceData, userDB } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleCreateEcoSpace1 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      company: data.company,
      description: data.description,
    }));

    navigate("/create-eco-space/s2");
  };

  return (
    <div className="w-full md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-500">Step 1 of 6</h4>
      <h1 className="text-2xl md:text-4xl font-semibold">
        What is the Name of your Company/ Organization?
      </h1>
      <p className="text-sm">
        This will be the name of your NUj Ecospace — choose something that your
        team will recognize.
      </p>
      <Form
        className=""
        name="basic"
        initialValues={{
          company: newEcoSpaceData?.company,
        }}
        autoComplete="off"
        onFinish={handleCreateEcoSpace1}
      >
        <div className="flex flex-col gap-1 ">
          <label>Company: </label>
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
        </div>
        <div className="flex flex-col gap-1 ">
          <label>Description: </label>
          <Form.Item
            className=""
            name="description"
            rules={[
              {
                required: true,
                message: "Please enter a Description!",
              },
            ]}
          >
            <TextArea
              className="h-20 bg-transparent focus:bg-transparent placeholder:text-gray-500"
              size="large"
              rows={3}
              placeholder="Details of company provided services"
            />
          </Form.Item>
        </div>

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
