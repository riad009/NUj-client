/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "sonner";
import config from "../../config";
import axios from "axios";

export default function LoginOptions() {
  const { logInWithGoogle, setUserRefetch, userRefetch } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const res = await logInWithGoogle();

    if (res._tokenResponse.email) {
      const payload = {
        name: res._tokenResponse.fullName,
        email: res._tokenResponse.email,
        image: res._tokenResponse.photoUrl,
        role: "user",
      };

      try {
        const promise = await axios.post(
          `${config.api_url}/users/create-google-user`,
          payload
        );
        if (promise.status === 200) {
          localStorage.setItem("accessToken", promise.data.data);
          setUserRefetch(!userRefetch);
          setTimeout(() => {
            toast.success(`Logged in`, {
              id: "login",
              duration: 2000,
              position: "top-center",
            });
            navigate("/");
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        return toast.error(`Log in failed`, {
          id: "login",
          duration: 2000,
          position: "top-center",
        });
      }
    }
  };

  const onFinish = async (values) => {
    // console.log(values);
    setLoading(true);
    try {
      const promise = await axios.post(
        `${config.api_url}/users/signin`,
        values
      );
      if (promise.status === 200) {
        localStorage.setItem("accessToken", promise.data.data);
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          toast.success(`Logged in`, {
            id: "login",
            duration: 2000,
            position: "top-center",
          });
          navigate("/");
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error(error.response.data.message || `Log in failed`, {
        id: "login",
        duration: 2000,
        position: "top-center",
      });
    }
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
            onClick={handleGoogleSignIn}
            className="w-full items-center justify-center  px-4 py-2 border flex gap-2 border-slate-200  rounded-lg text-slate-900  hover:border-slate-400  hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>{loading ? "Signing in.." : "Continue with Google"}</span>
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
          disabled={loading}
          className="mt-10 h-[40px] bg-blue-500 text-white"
        >
          {loading ? "Processing.." : "Signin"}
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
