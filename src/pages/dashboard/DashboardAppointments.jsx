import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import DashboardAppointmentsList from "../../components/dashboard/DashboardAppointmentsList";
import { useContext, useEffect, useState } from "react";
import config from "../../config";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const DashboardAppointments = () => {
  const initialEcoSpaceId = useLoaderData();
  const { userDB } = useContext(AuthContext);
  const [ecoSpaceId, setEcoSpaceId] = useState(initialEcoSpaceId);
  const [ecoSpaceList, setEcoSpaceList] = useState(null);
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/list/${userDB?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setEcoSpaceList(data.data);
      });
  }, [userDB, userDB?._id]);

  useEffect(() => {
    fetch(`${config.api_url}/appointments/list/${ecoSpaceId}`)
      .then((res) => res.json())
      .then((data) => setAppointments(data.data));
  }, [ecoSpaceId]);

  const handleFilterAppointments = (changedValues, prevValues) => {
    setEcoSpaceId(changedValues.ecoSpaceId);
  };

  return (
    <div>
      <Form
        className="w-full md:w-3/12"
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
        onValuesChange={handleFilterAppointments}
      >
        {/* name */}
        <div className="flex flex-col gap-1 mb-6">
          <label>EcoSpace: </label>
          <Form.Item
            name="ecoSpaceId"
            className="mb-1"
            rules={[
              {
                required: true,
                message: "Select an EcoSpace for filtering out",
              },
            ]}
          >
            <Select allowClear>
              {ecoSpaceList?.length
                ? ecoSpaceList.map((ecoSpace, i) => (
                    <Option key={i} value={ecoSpace._id}>
                      {ecoSpace.company}
                    </Option>
                  ))
                : ""}
            </Select>
          </Form.Item>
          {ecoSpaceId ? "" : <p className="text-sm ">Choose an EcoSpace</p>}
        </div>
      </Form>
      <DashboardAppointmentsList appointments={appointments} />
    </div>
  );
};

export default DashboardAppointments;
