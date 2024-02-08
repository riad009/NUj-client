import { useContext } from "react";
import logo from "../../assets/logos/main-logo.png";
import { Form, Input } from "antd";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const RegisterAsOrganization = () => {
  const navigate = useNavigate();
  const { orgFormValues, setOrgFormValues } = useContext(AuthContext);
  const onFinish = (values) => {
    setOrgFormValues(values);
    navigate("/register/organization/services");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(orgFormValues);

  return (
    <div className="">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img className="h-[50%] w-[50%]" src={logo} alt="" />
        </div>
        <h2 className="text-xl text-center">Register Organization</h2>
        <Form
          className=""
          name="basic"
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* first name */}
          <Form.Item
            className="mb-0"
            label="Org. Name"
            name="orgName"
            rules={[
              {
                required: true,
                message: "Please enter your Org Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* last name */}
          <Form.Item
            className="mb-0"
            label="Address"
            name="adress"
            rules={[
              {
                required: true,
                message: "Please enter address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Email */}
          <Form.Item
            className="mb-0"
            label="Phone#"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* NUj ID */}
          <Form.Item
            className="mb-0"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mb-4"
            label="Website"
            name="website"
            rules={[
              {
                required: true,
                message: "Please input your website !",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Button ghost type="primary" htmlType="submit">
            Submit 
          </Button> */}

          <button type="submit" className="p-btn-sm">
            Next
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterAsOrganization;
