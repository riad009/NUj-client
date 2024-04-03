import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Button, DatePicker, Form, Input, Select, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import moment from "moment";
import config from "../../config";
import { toast } from "sonner";
import axios from "axios";

const UserProfile = () => {
  const { user, userDB, logOut } = useContext(AuthContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setloading] = useState(false);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const handleUpdateProfile = (data) => {
    const values = {
      ...data,
      dateOfBirth: data?.dateOfBirth
        ? data["dateOfBirth"].format("YYYY-MM-DD")
        : undefined,
    };
    const payload = Object.fromEntries(
      Object.entries(values).filter(([key, value]) => value !== undefined)
    );
    // ! host the image and proceed post to the url

    fetch(`${config.api_url}/users/update-user/${userDB?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message, { id: "profile" });
        }
      })
      .catch((err) => {
        toast.error(err.message || data.message, { id: "profile" });
      });
  };

  const handleImageChange = async (file) => {
    if (file) {
      setloading(true);
      const formdata = new FormData();
      formdata.append("image", file);

      const response = await axios.patch(
        `${config.api_url}/users/update-image/${userDB?._id}`,
        formdata
      );

      setSelectedImage(response.data.data.photo);

      setloading(false);
    }
  };

  return (
    <div className="h-auto">
      <Form
        onFinish={handleUpdateProfile}
        initialValues={{
          name: userDB?.name,
          email: user?.email,
          phone: userDB?.phone,
          gender: userDB?.gender,
          // dateOfBirth: userDB?.dateOfBirth,
          address: userDB?.address,
          // Add other form field initial values as needed
        }}
        className="w-11/12 min-h-screen mt-24 mb-10 mx-auto space-y-5 flex flex-col items-center"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <div className="rounded-xl shadow-lg p-5 md:p-10 flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col gap-5 items-center">
              <img
                className="size-40 rounded-full "
                // src={user?.photoURL ? user?.photoURL : unknown}
                // src={
                //   userDB?.photo
                //     ? userDB?.photo
                //     : user?.photo
                //     ? user?.photo
                //     : unknown
                // }

                src={
                  selectedImage
                    ? selectedImage
                    : userDB?.photo
                    ? userDB?.photo
                    : user
                    ? user?.photo
                    : unknown
                }
                alt=""
              />
              <Form.Item
                name="photo"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  name="logo"
                  beforeUpload={() => false}
                  listType="picture"
                  onChange={(e) => handleImageChange(e.file)}
                >
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
                      size="middle"
                      className=""
                      disabled
                      placeholder="Ex: example@gmail.com"
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
                    <Select placeholder="Select a Gender">
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label>Date Of Birth: {userDB?.dateOfBirth}</label>
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
              <div className="text-center mt-6">
                <button type="submit" className="p-btn">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="rounded-xl shadow-lg p-5 md:p-10 h-full">
              <Form.Item
                name="isNotify"
                label="Recieve EcoSpace Notification?"
                valuePropName="checked"
              >
                <Switch
                  defaultChecked={userDB?.isNotify}
                  className="shadow-lg"
                />
              </Form.Item>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
              <h2>Notifications: </h2>
            </div>
            <div className="rounded-xl shadow-lg h-full p-5 md:p-10">
              Plan: {userDB?.plan || "N/A"}
            </div>
          </div>
        </div>
        <div>
          <button
            className={`px-4 py-2 border uppercase  font-semibold rounded-md
          bg-error text-base-100
        }`}
            onClick={() => logOut().then(toast.success("Logged out"))}
          >
            Sign out
          </button>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;
