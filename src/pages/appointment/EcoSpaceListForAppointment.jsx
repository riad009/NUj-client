import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";
import { Link } from "react-router-dom";
import EcoSpaceListItem from "../companyProfile/EcoSpaceListItem";
import AppointmentEcoSpaceListItem from "../../components/appointment/AppointmentEcoSpaceListItem";

const EcoSpaceListForAppointment = () => {
  return (
    <div className="mt-24">
      <div className="w-11/12 mx-auto">
        <Form
          className="w-full md:w-3/12"
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          {/* name */}
          <div className="flex flex-col gap-1 mb-6">
            <label>Service Type: </label>
            <Form.Item
              name="serviceTitle"
              className="mb-1"
              rules={[
                {
                  required: true,
                  message: "Select an EcoSpace for filtering out",
                },
              ]}
            >
              <Select defaultValue="Diversion Program" allowClear>
                <Option value="Diversion Program">Diversion Program</Option>
                <Option value="Mental Health">Mental Health</Option>
                <Option value="Counseling">Counseling</Option>
                <Option value="Group Supprt">Group Supprt</Option>
                {/* <Option value="Behavioral Health">Behavioral Health</Option> */}
                {/* <Option value="Supporttive Services">Supporttive Services</Option> */}
                <Option value="Food Programs">Food Programs</Option>
                <Option value="Financial Programs">Financial Programs</Option>
                <Option value="Job Readiness">Job Readiness</Option>
                <Option value="Outpatient Services">Outpatient Services</Option>
                <Option value="Reentry">Reentry</Option>
                <Option value="Children & Family Services">
                  Children & Family Services
                </Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
            <p className="text-sm ">Showing result for Diversion Program*</p>
          </div>
        </Form>
        <div className="flex flex-col p-2 md:p-5 gap-2 md:gap-5 bg-[#ecdeec] rounded-lg">
          <AppointmentEcoSpaceListItem />
          <AppointmentEcoSpaceListItem />
          <AppointmentEcoSpaceListItem />
        </div>
      </div>
    </div>
  );
};

export default EcoSpaceListForAppointment;
