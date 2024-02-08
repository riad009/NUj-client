import logo from "../../assets/logos/main-logo.png";
import { Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const RegisterAsParticiipant = () => {
  return (
    <div className="">
      <div className="w-10/12 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img className="h-[50%] w-[50%]" src={logo} alt="" />
        </div>
        <h2 className="text-xl text-center">Register as Participant</h2>
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
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please enter your First Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* last name */}
          <Form.Item
            className="mb-0"
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please enter your Last Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Email */}
          <Form.Item
            className="mb-0"
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* NUj ID */}
          <Form.Item
            className="mb-0"
            label="NUj ID#"
            name="nuj-id"
            rules={[
              {
                required: true,
                message: "Please enter your NUj ID!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            className="mb-4"
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Button ghost type="primary" htmlType="submit">
            Submit
          </Button> */}

          <button type="submit" className="p-btn-sm">
            Create account
          </button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterAsParticiipant;
