import loginImg from "../../assets/home/login.jpg";
import { Button, Divider, Form, Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const LoginOptions = () => {
  const { logInWithGoogle, logInWithEmail } = useContext(AuthContext);
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
    navigate("/");
  };

  const onFinish = async (values) => {
    const data = await logInWithEmail(values.email);
    console.log(data);
    toast.success(`Please Check your mail to verify`, {
      id: "login",
      duration: 5000,
      position: "top-right",
    });
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex flex-col px-10 items-center justify-center w-11/12 md:w-[35%] mx-auto">
        <div className="flex flex-col justify-center items-center space-y-2 mb-2">
          <img className="size-12" src={logo} alt="" />
          <h2 className="text-3xl font-semibold tracking-wider">
            Enter your email
          </h2>
          <p>We suggest using email address you use at work.</p>
        </div>
        <Form
          className="w-full space-y-2"
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* Email */}
          <Form.Item
            className="w-full mb-0"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your Email!",
              },
            ]}
          >
            <Input
              className="w-full"
              placeholder="Enter your email"
              type="email"
            />
          </Form.Item>
          <button type="submit" className="p-btn w-full">
            Log in
          </button>
        </Form>
        <Divider>Or</Divider>
        <div className="space-y-2 w-full">
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
      </div>
    </div>
  );
};

export default LoginOptions;
