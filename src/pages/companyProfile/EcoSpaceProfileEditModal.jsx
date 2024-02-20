import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
const EcoSpaceProfileEditMpdal = ({ open, setOpen }) => {
  return (
    <>
      <Modal
        title="EcoSpace - BlockClub"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form
          className="space-y-5"
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          {/* name */}
          <div className="w-full">
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label>Company/Org Name: </label>
                <Form.Item
                  className="mb-1"
                  name="address"
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
                    placeholder="Ex: John Doe"
                  />
                </Form.Item>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label>Project Name: </label>
                <Form.Item
                  className="mb-1"
                  name="reason"
                  rules={[
                    {
                      required: true,
                      message: "Provide a reason",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    className=""
                    placeholder="Ex: Camp fire"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex flex-col gap-1 w-full">
                <label>Email: </label>
                <Form.Item
                  className="mb-1"
                  name="address"
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
                  name="reason"
                  rules={[
                    {
                      required: true,
                      message: "Provide a phone",
                    },
                  ]}
                >
                  <Input
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
                  name="address"
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
                    placeholder="Ex: example@gmail.com"
                  />
                </Form.Item>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label>Phone: </label>
                <Form.Item
                  className="mb-1"
                  name="reason"
                  rules={[
                    {
                      required: true,
                      message: "Provide a phone",
                    },
                  ]}
                >
                  <Input
                    size="middle"
                    className=""
                    placeholder="Ex: 0123456789"
                  />
                </Form.Item>
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default EcoSpaceProfileEditMpdal;
