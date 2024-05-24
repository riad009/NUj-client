import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import DashboardAppointmentsList from "../../components/dashboard/DashboardAppointmentsList";
import { useContext, useEffect, useState } from "react";
import config from "../../config";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import LoadingScreen from "../../components/LoadingScreen";

const DashboardAppointments = () => {
  const initialEcoSpaceId = useLoaderData();
  const { userDB } = useContext(AuthContext);
  const [ecoSpaceId, setEcoSpaceId] = useState(initialEcoSpaceId);
  const [ecoSpaceList, setEcoSpaceList] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${config.api_url}/eco-spaces/all/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setEcoSpaceList(data.data);
        setEcoSpaceId(data?.data?.[0]?._id);
        setIsLoading(false);
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

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="overflow-x-auto p-5">
      <Form
        className="w-full md:w-3/12"
        name="basic"
        initialValues={{
          ecoSpaceId: ecoSpaceList?.[0]?.company,
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
          <p className="text-sm ">
            {appointments?.length ? appointments?.length : 0} result found
          </p>
        </div>
      </Form>
      <DashboardAppointmentsList appointments={appointments} />
    </div>
  );
};

export default DashboardAppointments;
