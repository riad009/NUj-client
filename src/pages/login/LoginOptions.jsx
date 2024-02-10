import loginImg from "../../assets/home/login.jpg";
import { Button, Divider, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginOptions = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const { user } = await logInWithGoogle();
    if (!user?.uid) {
      return toast.error(`Log in failed`, {
        id: "login",
        duration: 2000,
        position: "top-right",
      });
    }
    toast.success(`Logged in`, {
      id: "login",
      duration: 2000,
      position: "top-right",
    });
    navigate("/register/participant");
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    toast.success(`Logged in`, {
      id: "login",
      duration: 2000,
      position: "top-right",
    });
    navigate("/");
  };

  return (
    <div className="">
      <div className="w-full grid md:grid-cols-2 justify-center items-center  min-h-[120vh] ">
        <img src={loginImg} className="h-full" alt="" />
        <div className="flex flex-col gap-5 px-10 items-center my-10 md:m-0 ">
          <div className="w-full space-y-5">
            <h2 className="text-xl text-center uppercase tracking-wider">
              Login Using Email
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
              <button type="submit" className="p-btn-sm">
                Log in
              </button>
            </Form>
          </div>
          <Divider>Or</Divider>
          <div className="md:w-[60%] space-y-5">
            <Button
              onClick={handleGoogleLogin}
              size="large"
              block
              icon={<FcGoogle />}
            >
              Continue with Google
            </Button>
            <Button disabled size="large" block icon={<BsApple />}>
              Continue with Apple
            </Button>
          </div>
          <Divider>Register</Divider>
          <div>
            <Link to="/register/participant" className="link text-sm">
              Register as Participant
            </Link>
            <span className="px-2">/</span>
            <Link to="/register/organization" className="link text-sm">
              Register as Organization
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
