import { Link } from "react-router-dom";
import loginImg from "../../assets/home/login.jpg";
import { Divider, Form, Input } from "antd";
import { useGeoLocation } from "../../hooks/useGeoLocation";

const RegisterAsParticiipant = () => {
  const geolocation = useGeoLocation();
  console.log(geolocation);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 justify-center items-center  min-h-[120vh] ">
        <img src={loginImg} className="h-full" alt="" />
        <div className="flex flex-col gap-5 px-10 items-center my-10 md:m-0 ">
          <div className="w-full space-y-5">
            <h2 className="text-xl text-center uppercase tracking-wider">
              Create as Participant
            </h2>
            <Form
              className="text-center"
              name="basic"
              labelCol={{
                span: 5,
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
                className="mb-0 md:mb-5"
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
                className="mb-0 md:mb-5"
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
                className="mb-0 md:mb-5"
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your Email!",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              {/*ID */}
              <Form.Item
                className="mb-0 md:mb-5"
                label="NUj ID#"
                name="nujID"
                rules={[
                  {
                    required: true,
                    message: "Please enter your ID!",
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
                Create as Participant
              </button>
            </Form>
          </div>

          <Divider>Or</Divider>
          <div>
            {/* <Link to="/register/participant" className="link text-sm">
            Register as Participant
          </Link>
            <span className="px-2">/</span> */}
            <Link to="/register/organization" className="link text-sm">
              Register as Organization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAsParticiipant;
