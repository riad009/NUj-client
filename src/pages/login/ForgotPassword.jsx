/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";
import { useState } from "react";

import { toast } from "sonner";
import config from "../../config";
import axios from "axios";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    // console.log(values);
    setLoading(true);
    try {
      const promise = await axios.post(
        `${config.api_url}/users/forgot-password`,
        values
      );
      if (promise.status === 200) {
        toast.success("Reset password link sent to your mail!", {
          duration: 2000,
          position: "top-center",
        });
        navigate(-1);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error(
        error.response.data.message || `Something went wrong`,
        {
          id: "login",
          duration: 2000,
          position: "top-center",
        }
      );
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

          <h1 className="text-3xl font-semibold tracking-tight">
            Forgot Password?
          </h1>
          <p className="pt-2 pb-10">Enter your email to reset your password</p>
        </div>
        <div className="flex flex-col gap-6">
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
        </div>

        <Button
          htmlType="submit"
          disabled={loading}
          className="mt-6 h-[40px] bg-blue-500 text-white"
        >
          {loading ? "Processing.." : "Submit"}
        </Button>

        <p className="text-muted-foreground text-center mt-10">
          Have an account?{" "}
          <Link
            to="/login"
            className="cursor-pointer hover:underline text-blue-600"
          >
            Sigin
          </Link>
        </p>
      </Form>
      <p className="text-muted-foreground text-center mt-10">
        ©2024 Nuj all rights reserved
      </p>
    </div>
  );
}
