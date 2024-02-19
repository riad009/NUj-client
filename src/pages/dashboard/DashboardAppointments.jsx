import { Form, Select } from "antd";
import { Option } from "antd/es/mentions";
import DashboardAppointmentsList from "../../components/dashboard/DashboardAppointmentsList";

const DashboardAppointments = () => {
  return (
    <div>
      <Form
        className="w-full md:w-3/12"
        name="basic"
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        {/* name */}
        <div className="flex flex-col gap-1 ">
          <label>Appointments: </label>
          <Form.Item
            name="serviceTitle"
            className=""
            rules={[
              {
                required: true,
                message: "Select an EcoSpace for filtering out",
              },
            ]}
          >
            <Select defaultValue="EcoSpace1" allowClear>
              <Option value="EcoSpace1">EcoSpace1</Option>
              <Option value="EcoSpace2">EcoSpace2</Option>
              <Option value="EcoSpace3">EcoSpace3</Option>
            </Select>
          </Form.Item>
        </div>
      </Form>
      <DashboardAppointmentsList />
    </div>
  );
};

export default DashboardAppointments;
