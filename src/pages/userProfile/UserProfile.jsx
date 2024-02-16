import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Button, DatePicker, Form, Input, Select, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="h-auto">
      <Form className="w-11/12 min-h-screen mt-24 mb-10 mx-auto space-y-5 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="rounded-xl shadow-lg p-5 md:p-10 flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col gap-5 items-center">
              <img
                className="size-40 rounded-full "
                src={user?.photoURL ? user?.photoURL : unknown}
                alt=""
              />
              <Form.Item
                name="upload"
                valuePropName="fileList"
                // getValueFromEvent={normFile}
              >
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button icon={<UploadOutlined />}>Change</Button>
                </Upload>
              </Form.Item>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-1 ">
                <label>Name: </label>
                <Form.Item
                  className="mb-1 "
                  name="name"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    defaultValue={user?.displayName}
                    size="middle"
                    className=""
                    placeholder="Ex: John Doe"
                  />
                </Form.Item>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Email: </label>
                  <Form.Item
                    className="mb-1"
                    name="email"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Input
                      defaultValue={user?.email}
                      size="middle"
                      className=""
                      placeholder="Ex: example@xyz.com"
                    />
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Phone: </label>
                  <Form.Item
                    className="mb-1"
                    name="phone"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Input
                      size="middle"
                      className=""
                      placeholder="0123456789"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col gap-1 w-full">
                  <label>Gender: </label>
                  <Form.Item
                    className="mb-1"
                    name="gender"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <Select placeholder="Select a Gender" allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Date Of Birth: </label>
                  <Form.Item
                    className="mb-1 "
                    name="dateOfBirth"
                    rules={[
                      {
                        required: false,
                      },
                    ]}
                  >
                    <DatePicker className="w-full" />
                  </Form.Item>
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <label>Address: </label>
                <Form.Item
                  className="mb-1 "
                  name="address"
                  rules={[
                    {
                      required: false,
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    className=""
                    placeholder="Ex: 123, xyz"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="rounded-xl shadow-lg p-5 md:p-10 h-full">
              <Form.Item
                name="notify"
                label="Recieve EcoSpace Notification?"
                valuePropName="notify"
              >
                <Switch className="shadow-lg" defaultChecked />
              </Form.Item>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
            </div>
            <div className="rounded-xl shadow-lg h-full p-5 md:p-10">
              Coming soon
            </div>
          </div>
        </div>
        <button type="submit" className="p-btn">
          Save Changes
        </button>
      </Form>
    </div>
  );
};

export default UserProfile;
