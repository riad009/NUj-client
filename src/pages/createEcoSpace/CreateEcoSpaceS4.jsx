import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import config from "../../config";

const CreateEcoSpaceS4 = () => {
  const { setNewEcoSpaceData } = useContext(AuthContext);
  const [services, setServices] = useState(null);
  const navigate = useNavigate();
  const handleCreateEcoSpace4 = (data) => {
    setNewEcoSpaceData((prevValue) => ({
      ...prevValue,
      serviceId: data.serviceId,
      serviceDescription: data.serviceDescription,
    }));

    navigate("/create-eco-space/s5");
  };

  useEffect(() => {
    fetch(`${config.api_url}/services/list`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="w-11/12 md:w-[60%] space-y-5">
      <h4 className="text-xs text-gray-500">Step 4 of 6</h4>
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
        onFinish={handleCreateEcoSpace4}
      >
        {/* name */}
        <div className="flex flex-col gap-1 ">
          <label>Service: </label>
          <Form.Item
            name="serviceId"
            className="w-full"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select allowClear>
              {services?.length
                ? services.map((service, i) => (
                    <Option key={i} value={service._id}>
                      {service.title}
                    </Option>
                  ))
                : ""}
            </Select>
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 ">
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
              className="h-20 bg-transparent focus:bg-transparent placeholder:text-gray-500"
              size="large"
              placeholder="Details of company provided services"
            />
          </Form.Item>
        </div>

        <button type="submit" className="p-btn ">
          Next
        </button>
        {/* <Link to="/create-eco-space/s5" type="submit" className="p-btn ">
          Next
        </Link> */}
      </Form>
    </div>
  );
};

export default CreateEcoSpaceS4;
