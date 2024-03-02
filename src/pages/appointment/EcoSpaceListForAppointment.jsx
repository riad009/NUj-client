import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EcoSpaceListItem from "../companyProfile/EcoSpaceListItem";
import AppointmentEcoSpaceListItem from "../../components/appointment/AppointmentEcoSpaceListItem";
import config from "../../config";

const EcoSpaceListForAppointment = () => {
  const [services, setServices] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const [filteredEcoSpaces, setFilteredEcoSpaces] = useState(null);

  useEffect(() => {
    fetch(`${config.api_url}/services/list`)
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/eco-space-list/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setFilteredEcoSpaces(data.data));
  }, [serviceId]);

  const handleFilterService = (changedValues, prevValues) => {
    setServiceId(changedValues.serviceId);
  };

  return (
    <div className="my-24">
      <div className="w-11/12 mx-auto">
        <Form
          className="w-full md:w-3/12"
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onValuesChange={handleFilterService}
        >
          {/* name */}
          <div className="flex flex-col gap-1 mb-6">
            <label>Service Type: </label>
            <Form.Item
              name="serviceId"
              className="mb-1"
              rules={[
                {
                  required: true,
                  message: "Select an EcoSpace for filtering out",
                },
              ]}
            >
              <Select allowClear>
                {services?.length
                  ? services.map((service, i) => (
                      <Option key={i} value={service._id}>
                        {service.title}
                      </Option>
                    ))
                  : ""}
              </Select>
            </Form.Item>
            <p className="text-sm ">{filteredEcoSpaces?.length} result found</p>
          </div>
        </Form>
        <div className="flex flex-col p-2 md:p-5 gap-2 md:gap-5 bg-[#ecdeec] rounded-lg">
          {filteredEcoSpaces?.length ? (
            filteredEcoSpaces.map((ecoSpace, i) => (
              <AppointmentEcoSpaceListItem key={i} ecoSpace={ecoSpace} />
            ))
          ) : (
            <h2>No EcoSpces found</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcoSpaceListForAppointment;
