import { Button, Form, Input } from "antd";
import logo from "../../assets/logos/main-logo.png";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";
import { toast } from "sonner";
export default function Signup() {
  const { setUserRefetch, userRefetch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    // console.log(values);

    const payload = {
      ...values,
      name: values.firstName + " " + values.lastName,
    };

    try {
      const promise = await axios.post(
        `${config.api_url}/users/create-user`,
        payload
      );
      if (promise.status === 200) {
        localStorage.setItem("accessToken", promise.data.data);
        setUserRefetch(!userRefetch);
        setTimeout(() => {
          toast.success(`Sign up Successfull`, {
            id: "Signup",
            duration: 2000,
            position: "top-right",
          });
          navigate("/");
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return toast.error(error.response.data.message || `Signup failed`, {
        id: "Signup",
        duration: 2000,
        position: "top-right",
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-full">
      <div className="g-0 lg:flex min-h-screen">
        <div
          className="hidden lg:flex items-center lg:w-6/12 "
          style={{
            background: "#064b84",
          }}
        >
          <div className="px-4 py-6 text-white  md:p-12 max-w-xl mx-auto">
            <img
              src={logo}
              alt="Logo"
              className="absolute top-[60px] w-16 h-16"
            />

            <h4 className="mb-6 text-5xl font-semibold leading-snug">
              Start your <br />
              journey with us
            </h4>
            <p className="text-base pt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Left column container*/}
        <div className="px-4 md:px-0 lg:w-6/12 ">
          <div className="md:mx-6 md:p-12">
            {/*Logo*/}
            <div className="text-center">
              <div className="mb-12 mt-6 pb-1 max-w-[27rem] mx-auto">
                <h4 className="pb-1 text-3xl font-semibold">Register to Nuj</h4>
                <p className="pt-6">
                  Create your account. It’s free, no credit card required and
                  only takes a few minutes.
                </p>
              </div>
            </div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="max-w-[500px] mx-auto flex w-full flex-col justify-center "
            >
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground text-start pb-1">
                      First Name
                    </p>
                    <Form.Item
                      className="w-full mb-0"
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Enter your First Name!",
                        },
                      ]}
                    >
                      <Input type="text" className="h-[38px]" />
                    </Form.Item>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground text-start pb-1">
                      Last Name
                    </p>
                    <Form.Item
                      className="w-full mb-0"
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Enter your Last Name!",
                        },
                      ]}
                    >
                      <Input type="text" className="h-[38px]" />
                    </Form.Item>
                  </div>
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
                        message: "Enter your email!",
                      },
                    ]}
                  >
                    <Input type="email" className="h-[38px]" />
                  </Form.Item>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground text-start pb-1">
                    Enter your number
                  </p>
                  <Form.Item
                    className="w-full mb-0"
                    name="number"
                    rules={[
                      {
                        required: true,
                        message: "Enter your number!",
                      },
                    ]}
                  >
                    <Input type="number" className="h-[38px]" />
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
                {loading ? "Processing.." : "Signup"}
              </Button>

              <p className="text-muted-foreground text-center mt-10">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="cursor-pointer hover:underline text-blue-600"
                >
                  Login
                </Link>
              </p>
            </Form>
            <p className="text-muted-foreground text-center mt-10">
              ©2024 Nuj all rights reserved
            </p>
          </div>
        </div>
        {/* Right column container with background and description*/}
      </div>
    </div>
  );
}
