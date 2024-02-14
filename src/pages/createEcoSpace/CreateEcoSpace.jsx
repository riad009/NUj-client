import { useContext, useState } from "react";
import loginImg from "../../assets/home/login.jpg";
import { Divider, Form, Input, Modal } from "antd";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/main-logo.png";

const CreateEcoSpace = () => {
  const { user } = useContext(AuthContext);
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
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-11/12 md:w-8/12 flex justify-center items-center mx-auto">
          <div className="w-full space-y-2">
            <div className="flex flex-col justify-center items-center space-y-2 mb-4">
              <Link to="/">
                <img className="size-12" src={logo} alt="" />
              </Link>
              <h2 className="text-3xl font-semibold tracking-wider">
                Create Ecospace
              </h2>
              <p>
                We suggest using name, email, phone, address which you use at
                work.
              </p>
            </div>
            <Form
              className="text-center"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              {/* name */}
              <Form.Item
                className=" "
                label="Name"
                name="orgName"
                rules={[
                  {
                    required: true,
                    message: "Please enter Organization Name!",
                  },
                ]}
              >
                <Input placeholder="Company/Organization name" />
              </Form.Item>
              <div className="flex justify-center items-center gap-2">
                {/* email */}
                <Form.Item
                  className=" w-full"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an Email!",
                    },
                  ]}
                >
                  <Input defaultValue={user.email} type="email" />
                </Form.Item>
                {/* phone */}
                <Form.Item
                  className=" w-full"
                  label="Phone"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Phone number!",
                    },
                  ]}
                >
                  <Input type="tel" />
                </Form.Item>
              </div>
              <Form.Item
                className=""
                label="Address"
                name="address"
                rules={[
                  {
                    required: true,
                    message: "Please enter Company Address",
                  },
                ]}
              >
                <Input placeholder="company office address" />
              </Form.Item>
              <Form.Item
                className=""
                label="Website"
                name="website"
                rules={[
                  {
                    required: true,
                    message: "Please enter Website Link",
                  },
                ]}
              >
                <Input placeholder="www.xyz.com" />
              </Form.Item>

              <Link type="submit" className="p-btn">
                Next
              </Link>
            </Form>
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

export default CreateEcoSpace;
