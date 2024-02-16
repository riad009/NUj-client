import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import unknown from "../../assets/home/unknown.jpg";
import { Button, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="h-auto">
      <Form className="w-11/12 min-h-screen mt-24 mb-10 mx-auto  grid grid-cols-2 gap-10">
        <div className="rounded-xl shadow-lg p-10 flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-col gap-5 items-center">
            <img className="w-[50%] rounded-full " src={unknown} alt="" />
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
                <Input size="small" className="" placeholder="Ex: John Doe" />
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
                    size="small"
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
                  <Input size="small" className="" placeholder="0123456789" />
                </Form.Item>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="rounded-xl shadow-lg h-full">ds</div>
          <div className="rounded-xl shadow-lg h-full">sd</div>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;
