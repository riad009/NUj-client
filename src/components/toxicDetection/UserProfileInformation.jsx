import { Form, Input } from "antd";

const UserProfileInformation = () => {
  return (
    <Form className="w-full">
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
          <Input size="middle" className="" placeholder="Ex: John Doe" />
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
            <Input size="middle" className="" placeholder="0123456789" />
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
          <Input size="middle" className="" placeholder="Ex: 123, xyz" />
        </Form.Item>
      </div>
    </Form>
  );
};

export default UserProfileInformation;
