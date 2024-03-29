import { useContext, useState } from "react";
import loginImg from "../../assets/home/login.jpg";
import { Divider, Form, Input, Modal } from "antd";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const RegisterAsOrganization = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const navigate = useNavigate();
  const { orgFormValues, setOrgFormValues } = useContext(AuthContext);
  const onFinish = (values) => {
    setOrgFormValues(values);
    showModal();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(orgFormValues);

  const handleOk = () => {
    navigate("/register/organization/plans");
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    navigate("/");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="">
        <div className="w-full grid md:grid-cols-2 justify-center items-center  min-h-[120vh] ">
          <img src={loginImg} className="h-full" alt="" />
          <div className="flex flex-col gap-5 px-10 items-center my-10 md:m-0 ">
            <div className="w-full space-y-5">
              <h2 className="text-xl text-center uppercase tracking-wider">
                Create as Organization
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
                  label="Org Name"
                  name="orgName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Organization Name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                {/* last name */}
                <Form.Item
                  className="mb-0 md:mb-5"
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Org address!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  className="mb-0 md:mb-5"
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Organization phone!",
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
                <Form.Item
                  className="mb-4"
                  label="Website"
                  name="website"
                  rules={[
                    {
                      required: true,
                      message: "Please input Org Website!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* <Button ghost type="primary" htmlType="submit">
          Submit
        </Button> */}

                <button type="submit" className="p-btn-sm">
                  Create as Organization
                </button>
              </Form>
            </div>

            <Divider>Or</Divider>
            <div>
              <Link to="/register/participant" className="link text-sm">
                Register as Participant
              </Link>
              {/* <span className="px-2">/</span> */}
              {/* <Link to="/register/organization" className="link text-sm">
              Register as Organization
            </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Modal
        closeIcon={false}
        cancelText="skip"
        okText="view plans"
        okType="default"
        title="Subscription"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        If you want to go with the premium plan, press continue. Otherwise press
        skip
      </Modal>
    </>
  );
};

export default RegisterAsOrganization;
