import { Form, Input } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const UserProfileInformation = () => {
  const { userDB } = useContext(AuthContext);
  return (
    <Form
      initialValues={{
        name: userDB?.name,
        phone: userDB?.phone,
        email: userDB?.email,
        address: userDB?.address,
      }}
      className="w-full"
    >
      <h1 className="text-base md:text-xl mb-2">User Profile:</h1>
      <div className="flex items-center gap-5">
        <div className="flex flex-col gap-1 w-full">
          <label>First Name: </label>
          <Form.Item
            className="mb-1 "
            name="name"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input size="large" className="" placeholder="Ex: John Doe" />
          </Form.Item>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label>Last Name: </label>
          <Form.Item
            className="mb-1 "
            name=""
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input size="large" className="" placeholder="Ex: Doe" />
          </Form.Item>
        </div>
      </div>
      <div className="flex items-center gap-5">
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
              type="number"
              size="large"
              className=""
              placeholder="0123456789"
            />
          </Form.Item>
        </div>
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
              size="large"
              className=""
              placeholder="Ex: example@gmail.com"
            />
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
          <Input size="large" className="" placeholder="Ex: 123, xyz" />
        </Form.Item>
      </div>
    </Form>
  );
};

export default UserProfileInformation;
