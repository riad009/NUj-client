import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
import { toast } from "sonner";
import config from "../../config";
import { useNavigate } from "react-router-dom";
const EcoSpaceProfileEditMpdal = ({ open, setOpen, ecoSpace }) => {
  const navigate = useNavigate();
  const { company, description, website, email, phone, address, _id } =
    ecoSpace ?? {};

  const handleUpdateEcoSpace = (data) => {
    fetch(`${config.api_url}/eco-spaces/update/eco-space/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(data.message);
        console.log(data);
        setOpen(false);
        // navigate("/profile/eco-space/list");
      });
  };

  return (
    <>
      <Modal
        title="EcoSpace - BlockClub"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        // okText="Update"
        // okType="default"
        footer={null}
      >
        <Form
          className="space-y-5"
          name="basic"
          initialValues={{
            company,
            description,
            website,
            email,
            phone,
            address,
          }}
          autoComplete="off"
          onFinish={handleUpdateEcoSpace}
        >
          {/* name */}
          <div className="w-full">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label>Company/Org Name: </label>
                <Form.Item
                  className="mb-1"
                  name="company"
                  rules={[
                    {
                      required: false,
                      message: "Provide a Name",
                    },
                  ]}
                >
                  <Input
                    // defaultValue={user?.email}
                    size="middle"
                    className=""
                    placeholder="Ex: Comant ltd"
                  />
                </Form.Item>
              </div>

              {/* <div className="flex flex-col gap-1 w-full">
                <label>Project Name: </label>
                <Form.Item
                  className="mb-1"
                  name="project"
                  rules={[
                    {
                      required: true,
                      message: "Provide a Project",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    className=""
                    placeholder="Ex: Camp fire"
                  />
                </Form.Item>
              </div> */}
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
                      message: "Provide an email",
                    },
                  ]}
                >
                  <Input
                    // defaultValue={user?.email}
                    size="middle"
                    className=""
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
                      required: true,
                      message: "Provide a phone",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    size="middle"
                    className=""
                    placeholder="Ex: 0123456789"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label>Website: </label>
                <Form.Item
                  className="mb-1"
                  name="website"
                  rules={[
                    {
                      required: false,
                      message: "Provide an website URL",
                    },
                  ]}
                >
                  <Input
                    // defaultValue={user?.email}
                    size="middle"
                    className=""
                    placeholder="Ex: www.xyz.com"
                  />
                </Form.Item>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label>Address: </label>
                <Form.Item
                  className="mb-1"
                  name="address"
                  rules={[
                    {
                      required: false,
                      message: "Provide an address",
                    },
                  ]}
                >
                  <Input
                    // defaultValue={user?.email}
                    size="middle"
                    className=""
                    placeholder="Ex: 123, xyz"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Description: </label>
              <Form.Item
                className="mb-1"
                name="description"
                rules={[
                  {
                    required: false,
                    message: "Provide a Description",
                  },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <div className="space-x-2">
            <button className="p-btn " onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button className="p-btn" type="submit">
              Update
            </button>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default EcoSpaceProfileEditMpdal;
