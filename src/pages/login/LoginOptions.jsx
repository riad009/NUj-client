/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";

export default function LoginOptions() {
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
    console.log("onFinish");

    const data = await logInWithEmail(values.email);
    console.log(data);
    toast.success(`Please Check your mail to verify`, {
      id: "login",
      duration: 5000,
      position: "top-right",
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="min-h-screen flex items-center flex-col justify-center bg-[#eff4fa]">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="max-w-[550px] mx-auto flex w-full flex-col justify-center bg-white rounded-md shadow-sm px-16 py-12"
      >
        <div className="flex flex-col space-y-2 text-center items-center">
          <img src={logo} alt="Logo" className=" w-16 h-16" />

          <h1 className="text-3xl font-semibold tracking-tight">Login In</h1>
          <p className="pt-2 pb-10">
            Login to your account with your credentials
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full items-center justify-center  px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-slate-900  hover:border-slate-400  hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            {/* <span>{ ? "Signing in.." : "Continue with Google"}</span> */}
            <span>{"Continue with Google"}</span>
          </button>

          <div className="or">
            <span>Or Sign in with Email</span>
          </div>

          <div>
            <p className="text-sm text-muted-foreground text-start pb-1">
              Enter your email
            </p>
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
              <Input type="email" className="h-[38px]" />
            </Form.Item>
          </div>
          <div>
            <p className="text-sm text-muted-foreground text-start pb-1">
              Enter your password
            </p>
            <Form.Item
              className="w-full mb-0"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your Pasword!",
                },
              ]}
            >
              <Input.Password type="password" className="h-[38px]" />
            </Form.Item>
          </div>
        </div>

        <Button
          htmlType="submit"
          // disabled={loading}
          className="mt-10 h-[40px] bg-blue-500 text-white"
        >
          Sign In
        </Button>

        <p className="text-muted-foreground text-center mt-10">
          Dont't have an account?{" "}
          <Link
            to="/signup"
            className="cursor-pointer hover:underline text-blue-600"
          >
            Signup
          </Link>
        </p>
      </Form>
      <p className="text-muted-foreground text-center mt-10">
        ©2024 Nuj all rights reserved
      </p>
    </div>
  );
}
