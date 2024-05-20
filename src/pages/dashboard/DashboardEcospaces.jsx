import React, { useEffect, useState } from "react";
import DashboardEcoSpacesListItem from "../../components/dashboard/DashboardEcoSpacesListItem";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import config from "../../config";
import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import LoadingScreen from "../../components/LoadingScreen";

const DashboardEcospaces = () => {
  const [services, setServices] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const [filteredEcoSpaces, setFilteredEcoSpaces] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch(`${config.api_url}/services/list`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setServiceId(data.data[0]._id);
        setIsloading(false);
      });
  }, []);

  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/eco-space-list/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setFilteredEcoSpaces(data.data));
  }, [serviceId]);

  const handleFilterService = (changedValues, prevValues) => {
    setServiceId(changedValues.serviceId);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-x-auto p-5">
      {/* <Link to="/create-eco-space/banner" className="p-btn">
        Add New
      </Link> */}
      <Form
        className="w-full md:w-3/12"
        name="basic"
        initialValues={{ serviceId: services[0].title }}
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
          <p className="text-sm ">
            {filteredEcoSpaces?.length ? filteredEcoSpaces?.length : 0} result
            found
          </p>
        </div>
      </Form>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Company</th>
            {/* <th>Service</th> */}
            <th>Co Workers</th>
            <th>Plan</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEcoSpaces?.length ? (
            filteredEcoSpaces.map((ecoSpace, i) => (
              <DashboardEcoSpacesListItem key={i} ecoSpace={ecoSpace} />
            ))
          ) : (
            <h2>No EcoSpces found</h2>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardEcospaces;
