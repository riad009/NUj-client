import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import TextArea from "antd/es/input/TextArea";
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
        okText="Update"
        okType="default"
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
                  name="name"
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
                  name="projectName"
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
                    placeholder="Ex: example@gmail.com"
                  />
                </Form.Item>
              </div>

              <div className="flex flex-col gap-1 w-full">
                <label>Service: </label>
                <Form.Item
                  className="mb-1"
                  name="service"
                  rules={[
                    {
                      required: true,
                      message: "Provide a phone",
                    },
                  ]}
                >
                  <Select placeholder="Select a Service" allowClear>
                    <Option value="Diversion Program">Diversion Program</Option>
                    <Option value="Mental Health">Mental Health</Option>
                    <Option value="Counseling">Counseling</Option>
                    <Option value="Group Supprt">Group Supprt</Option>
                    {/* <Option value="Behavioral Health">Behavioral Health</Option> */}
                    {/* <Option value="Supporttive Services">Supporttive Services</Option> */}
                    <Option value="Food Programs">Food Programs</Option>
                    <Option value="Financial Programs">
                      Financial Programs
                    </Option>
                    <Option value="Job Readiness">Job Readiness</Option>
                    <Option value="Outpatient Services">
                      Outpatient Services
                    </Option>
                    <Option value="Reentry">Reentry</Option>
                    <Option value="Children & Family Services">
                      Children & Family Services
                    </Option>
                    <Option value="Other">Other</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label>Website: </label>
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
        </Form>
      </Modal>
    </>
  );
};
export default EcoSpaceProfileEditMpdal;
